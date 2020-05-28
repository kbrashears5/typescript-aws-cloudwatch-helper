import { Logger, LogLevel } from 'typescript-ilogger';
import { TestingValues } from './test-values';
import { CloudWatchHelper } from './helper';
import { CloudWatchMock } from './mock';

const logger = new Logger(LogLevel.Off);
const mockerResolves = new CloudWatchMock(false);
const cloudWatchHelperMockResolves = new CloudWatchHelper(logger,
    mockerResolves.Mock);
const mockerRejects = new CloudWatchMock(true);
const cloudWatchHelperMockRejects = new CloudWatchHelper(logger,
    mockerRejects.Mock);
const TestValues = new TestingValues();

/**
 * Test the PutMetricDataAsync method
 */
describe(`${CloudWatchHelper.name}.${cloudWatchHelperMockResolves.PutMetricDataAsync.name}`, () => {
    // set action for this method
    const action = `${CloudWatchHelper.name}.${cloudWatchHelperMockResolves.PutMetricDataAsync.name}`;

    test(`${TestValues.ThrowsOnEmpty} namespace`, () => {
        const actual = cloudWatchHelperMockResolves.PutMetricDataAsync(TestValues.EmptyString,
            TestValues.MetricDatum);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} namespace`);
    });
    test(`${TestValues.ThrowsOnEmpty} metricData`, () => {
        const actual = cloudWatchHelperMockResolves.PutMetricDataAsync(TestValues.Namespace,
            TestValues.EmptyArray);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} metricData`);
    });
    test(TestValues.InvalidTest, () => {
        const actual = cloudWatchHelperMockRejects.PutMetricDataAsync(TestValues.Namespace,
            TestValues.MetricDatum);
        return expect(actual).rejects.toThrow(TestValues.AWSError);
    });
    test(TestValues.ValidTest, () => {
        const actual = cloudWatchHelperMockResolves.PutMetricDataAsync(TestValues.Namespace,
            TestValues.MetricDatum);
        return expect(actual).resolves.toEqual(mockerResolves.PutMetricDataResponse);
    });
});

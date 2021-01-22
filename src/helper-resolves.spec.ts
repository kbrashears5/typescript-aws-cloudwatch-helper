import { Logger, LogLevel } from 'typescript-ilogger';
import { TestingValues } from './test-values';
import { CloudWatchHelper } from './helper';

const putMetricDataResponse: object = {};

const putMetricData = jest.fn().mockImplementation(() => {
    return Promise.resolve<{}>(putMetricDataResponse);
});

// mock the functions
jest.mock('@aws-sdk/client-cloudwatch', () => {
    return {
        CloudWatch: jest.fn().mockImplementation(() => {
            return {
                putMetricData,
            };
        }),
    };
});

const logger = new Logger(LogLevel.Off);
const cloudWatchHelperMock = new CloudWatchHelper(logger);
const TestValues = new TestingValues();

/**
 * Test the PutMetricDataAsync method
 */
describe(`${CloudWatchHelper.name}.${cloudWatchHelperMock.PutMetricDataAsync.name}`, () => {
    // set action for this method
    const action = `${CloudWatchHelper.name}.${cloudWatchHelperMock.PutMetricDataAsync.name}`;

    test(`${TestValues.ThrowsOnEmpty} namespace`, () => {
        const actual = cloudWatchHelperMock.PutMetricDataAsync(TestValues.EmptyString,
            TestValues.MetricDatum);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} namespace`);
    });
    test(`${TestValues.ThrowsOnEmpty} metricData`, () => {
        const actual = cloudWatchHelperMock.PutMetricDataAsync(TestValues.Namespace,
            TestValues.EmptyArray);
        return expect(actual).rejects.toThrow(`[${action}]-${TestValues.MustSupply} metricData`);
    });
    test(TestValues.ValidTest, () => {
        const actual = cloudWatchHelperMock.PutMetricDataAsync(TestValues.Namespace,
            TestValues.MetricDatum);
        return expect(actual).resolves.toEqual(putMetricDataResponse);
    });
});

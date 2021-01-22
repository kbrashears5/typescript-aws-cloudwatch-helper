import { Logger, LogLevel } from 'typescript-ilogger';
import { TestingValues } from './test-values';
import { CloudWatchHelper } from './helper';

const error = new Error(`AWS Error`);

const putMetricData = jest.fn().mockImplementation(() => {
    return Promise.reject(error);
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
    test(TestValues.InvalidTest, () => {
        const actual = cloudWatchHelperMock.PutMetricDataAsync(TestValues.Namespace,
            TestValues.MetricDatum);
        return expect(actual).rejects.toThrow(TestValues.AWSError);
    });
});

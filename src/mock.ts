import { BaseMock } from 'typescript-helper-functions';
import * as CloudWatch from '@aws-sdk/client-cloudwatch';

/**
 * CloudWatch Mock class
 */
export class CloudWatchMock extends BaseMock {

    /**
     * Mocks an AWS.CloudWatch.PutMetricDataResponse response
     * Technically doesn't exist
     */
    public PutMetricDataResponse: object = {};

    /**
     * Create the CloudWatch mock
     */
    protected CreateMock(returnError: boolean) {
        const rejectResponse = new Error(`AWS Error`);

        // implement the AWS responses
        const awsResponses = {
            // put metric data response
            putMetricData: {
                promise: jest.fn().mockImplementation(() => {
                    return returnError ?
                        Promise.reject(rejectResponse) :
                        Promise.resolve<{}>(this.PutMetricDataResponse);
                }),
            },
        };

        const options = {} as CloudWatch.CloudWatch;

        // create the functions
        let functions = new CloudWatch.CloudWatch(options);
        functions = {
            putMetricData: () => awsResponses.putMetricData,
        };

        return functions;
    }
}

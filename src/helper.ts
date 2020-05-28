import * as AWS from 'aws-sdk';
import { ILogger } from 'typescript-ilogger';
import { ICloudWatchHelper } from './interface';
import { BaseClass } from 'typescript-helper-functions';

/**
 * CloudWatch Helper
 */
export class CloudWatchHelper extends BaseClass implements ICloudWatchHelper {

    /**
     * AWS Repository for CloudWatch
     */
    public Repository: AWS.CloudWatch;

    /**
     * Initializes new instance of CloudWatchHelper
     * @param logger {ILogger} Injected logger
     * @param repository {AWS.CloudWatch} Injected Repository. A new repository will be created if not supplied
     * @param options {AWS.CloudWatch.ClientConfiguration} Injected configuration if a Repository is supplied
     */
    constructor(logger: ILogger,
        repository?: AWS.CloudWatch,
        options?: AWS.CloudWatch.ClientConfiguration) {

        super(logger);
        this.Repository = repository || new AWS.CloudWatch(options);
    }

    /**
     * Put data to a metric
     * @param namespace {string} Custom namespace to put data to
     * @param metricData {AWS.CloudWatch.MetricDatum[]} Metric data to put
     */
    public async PutMetricDataAsync(namespace: string,
        metricData: AWS.CloudWatch.MetricDatum[]): Promise<object> {

        const action = `${CloudWatchHelper.name}.${this.PutMetricDataAsync.name}`;
        this.LogHelper.LogInputs(action, { namespace, metricData});

        // guard clauses
        if (this.ObjectOperations.IsNullOrWhitespace(namespace)) { throw new Error(`[${action}]-Must supply namespace`); }
        if (!metricData || metricData.length === 0) { throw new Error(`[${action}]-Must supply metricData`); }

        // create params object
        const params: AWS.CloudWatch.PutMetricDataInput = {
            MetricData: metricData,
            Namespace: namespace,
        };
        this.LogHelper.LogRequest(action, params);

        // make AWS call
        const response = await this.Repository.putMetricData(params).promise();
        this.LogHelper.LogResponse(action, response);

        return response;
    }
}

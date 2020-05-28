import * as AWS from 'aws-sdk';
/**
 * CloudWatch Helper
 */
export interface ICloudWatchHelper {

    /**
     * AWS Repository for CloudWatch
     */
    Repository: AWS.CloudWatch;

    /**
     * Put data to a metric
     * @param namespace {string} Custom namespace to put data to
     * @param metricData {AWS.CloudWatch.MetricDatum[]} Metric data to put
     */
    PutMetricDataAsync(namespace: string,
        metricData: AWS.CloudWatch.MetricDatum[]): Promise<object>;
}

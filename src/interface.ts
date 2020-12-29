import * as CloudWatch from '@aws-sdk/client-cloudwatch';

/**
 * CloudWatch Helper
 */
export interface ICloudWatchHelper {

    /**
     * AWS Repository for CloudWatch
     */
    Repository: CloudWatch.CloudWatch;

    /**
     * Put data to a metric
     * @param namespace {string} Custom namespace to put data to
     * @param metricData {CloudWatch.MetricDatum[]} Metric data to put
     */
    PutMetricDataAsync(namespace: string,
        metricData: CloudWatch.MetricDatum[]): Promise<object>;
}

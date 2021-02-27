<h1 align="center">typescript-aws-cloudwatch-helper</h1>

<div align="center">
    
<b>Typescript helper functions for AWS CloudWatch service</b>
    
[![Build Status](https://dev.azure.com/kbrashears5/github/_apis/build/status/kbrashears5.typescript-aws-cloudwatch-helper?branchName=master)](https://dev.azure.com/kbrashears5/github/_build/latest?definitionId=17&branchName=master)
[![Tests](https://img.shields.io/azure-devops/tests/kbrashears5/github/17)](https://img.shields.io/azure-devops/tests/kbrashears5/github/17)
[![Code Coverage](https://img.shields.io/azure-devops/coverage/kbrashears5/github/17)](https://img.shields.io/azure-devops/coverage/kbrashears5/github/17)

[![NPM Version](https://img.shields.io/npm/v/typescript-aws-cloudwatch-helper)](https://img.shields.io/npm/v/typescript-aws-cloudwatch-helper)
[![Downloads](https://img.shields.io/npm/dt/typescript-aws-cloudwatch-helper)](https://img.shields.io/npm/dt/typescript-aws-cloudwatch-helper)

</div>

## Install

```
npm install typescript-aws-cloudwatch-helper@latest
```

## Usage

### Default - running in Lambda in your own account

```typescript
const logger = new Logger(LogLevel.Trace);

const helper = new CloudWatchHelper(logger);

const response = await helper.PutMetricDataAsync(
  'namespace',
  [] as AWS.CloudWatch.MetricDatum[],
);
```

### Running in separate account or not in Lambda

```typescript
const logger = new Logger(LogLevel.Trace);

const options: AWS.CloudWatch.ClientConfiguration = {
  accessKeyId: '{access_key}',
  secretAccessKey: '{secret_key}',
  region: 'us-east-1',
};

const repository = new AWS.CloudWatch(options);

const helper = new CloudWatchHelper(logger, repository);

const response = await helper.PutMetricDataAsync(
  'namespace',
  [] as AWS.CloudWatch.MetricDatum[],
);
```

## Notes

If no options are supplied, will default to `us-east-1` as the region

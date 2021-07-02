<h1 align="center">typescript-aws-cloudwatch-helper</h1>

<div align="center">
    
<b>Typescript helper functions for AWS CloudWatch service</b>
    
[![CI/CD](https://github.com/kbrashears5/typescript-aws-cloudwatch-helper/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/kbrashears5/typescript-aws-cloudwatch-helper/actions/workflows/ci-cd.yml)
[![codecov](https://codecov.io/gh/kbrashears5/typescript-aws-cloudwatch-helper/branch/master/graph/badge.svg?token=PTFOKRDWVN)](https://codecov.io/gh/kbrashears5/typescript-aws-cloudwatch-helper)
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
import * as CloudWatch from '@aws-sdk/client-cloudwatch';

const logger = new Logger(LogLevel.Trace);

const options: CloudWatch.CloudWatchClientConfig = {
  accessKeyId: '{access_key}',
  secretAccessKey: '{secret_key}',
  region: 'us-east-1',
};

const repository = new CloudWatch.CloudWatch(options);

const helper = new CloudWatchHelper(logger, repository);

const response = await helper.PutMetricDataAsync(
  'namespace',
  [] as CloudWatch.MetricDatum[],
);
```

## Notes

If no options are supplied, will default to `us-east-1` as the region

## Development

Clone the latest and run

```npm
npm run prep
```

to install packages and prep the git hooks

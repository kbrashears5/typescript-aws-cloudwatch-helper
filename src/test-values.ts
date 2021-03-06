import * as CloudWatch from '@aws-sdk/client-cloudwatch';

/**
 * Test values
 */
export class TestingValues {
  // descriptions
  public AWSError = 'AWS Error';
  public InvalidTest = 'returns error from AWS';
  public MustSupply = 'Must supply';
  public ThrowsOnEmpty = 'throws on empty';
  public ValidTest = 'returns valid response from AWS';

  // empty values
  public EmptyArray = [];
  public EmptyString = '';

  // numbers
  public NumberValue = 1;

  // booleans
  public BooleanValue = true;

  // strings
  public Arn = 'arn';
  public Body = 'body';
  public Name = 'name';
  public Namespace = 'namespace';
  public Uuid = 'uuid';

  // objects
  // eslint-disable-next-line no-invalid-this
  public MetricDatum: CloudWatch.MetricDatum[] = [{ MetricName: this.Name }];
}

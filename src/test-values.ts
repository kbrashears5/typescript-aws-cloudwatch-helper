/**
 * Test values
 */
export class TestingValues {
    // descriptions
    public AWSError: string = 'AWS Error';
    public InvalidTest: string = 'returns error from AWS';
    public MustSupply: string = 'Must supply';
    public ThrowsOnEmpty: string = 'throws on empty';
    public ValidTest: string = 'returns valid response from AWS';

    // empty values
    public EmptyArray = [];
    public EmptyString: string = '';

    // numbers
    public NumberValue: number = 1;

    // booleans
    public BooleanValue: boolean = true;

    // strings
    public Arn: string = 'arn';
    public Body: string = 'body';
    public Name: string = 'name';
    public Namespace: string = 'namespace';
    public Uuid: string = 'uuid';

    // objects
    public MetricDatum: AWS.CloudWatch.MetricDatum[] = [{ MetricName: this.Name }];
}

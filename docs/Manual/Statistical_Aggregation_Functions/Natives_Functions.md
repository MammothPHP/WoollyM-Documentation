# Native stats functions

## Natively provided functions
> [!NOTE]
> _(non-exhaustive documentation)_

```php
$stmt = $df->selectAll();

$stmt->countRecords(); // count number of records in the statement

$stmt->countDistinctValues(); // count distinct values for of each records in statement
$df->groupBy(CountDistinctValues::col('A'));

$stmt->size($ingoreNonNumericValue = false, $ignoreNullValue = false); // count value in selection

$stmt->sum(); // sum all numeric value of each records in statement
$df->groupBy(Sum::col('A'));

$stmt->mean(); // average numeric value in selection
$df->groupBy(Mean::col('A'));
$stmt->average(); // average numeric value in selection
$df->groupBy(Average::col('A'));

$stmt->min(); // min value (numeric)
$df->groupBy(Min::col('A'));
$stmt->max(); // max value (numeric)
$df->groupBy(Max::col('A'));
```

## Aggregate Function optimized on driver side (performance)
__NOT YET IMPLEMENTED__
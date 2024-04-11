# Aggregate stats functions

## Natively provided
> [!NOTE]
> _(non-exhaustive documentation)_

```php
$stmt = $df->selectAll();

$stmt->countRecords(); // count number of records in the statement
$stmt->countDistinctValues(); // count distinct values for of each records in statement
$stmt->size($ingoreNonNumericValue = false, $ignoreNullValue = false); // count value in selection
$stmt->sum(); // sum all numeric value of each records in statement
$stmt->mean(); // average numeric value in selection
$stmt->min(); // min value (numeric)
$stmt->max(); // max value (numeric)
```

## Aggregate Function optimized on driver side (performance)
__NOT YET IMPLEMENTED__
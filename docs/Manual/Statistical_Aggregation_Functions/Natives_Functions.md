# Aggregate stats functions

## Natively provided
> [!NOTE]
> _(non-exhaustive documentation)_

```php
$stmt = $df->selectAll();

$stmt->countRecords(); // count number of records in the statement
$stmt->count(); // count each value in selection
$stmt->countDistinct(); // count distinct value for of each records in statement
$stmt->size(); // count value in selection including null value
$stmt->sum(); // sum all numeric value of each records in statement
$stmt->mean(); // average numeric value in selection
$stmt->min(); // min value (numeric)
$stmt->max(); // max value (numeric)
```

## Aggregate Function optimized on driver side (performance)
__NOT YET IMPLEMENTED__
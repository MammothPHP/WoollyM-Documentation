# Extract
::: warning
Extract operations are not yet well optimized about memory consumption. Some of them have the potential to do so significantly in the future; others won't really be able to.
:::

 The `Extract` object offers an API to return a NEW DataFrame without modifying anything from the original DataFrame. It's also possible to export a Select object to a new DataFrame, but Extract API also offer transformations methods.

```php
// To a new Data Frame
$df->extract()->....

// To a custom dataFrame (useful for alternatives data-drivers)
$newDf = new DataFrame(dataDriver: $pdoSqlDriver);
$df->extract(to: $newDf)->...
```

## Clone
```php
$newDf = $df->extract()->clone();
$newDf = clone $df; // equivalent
```

## Extract DataFrame from SQL
```php
$df = DataFrame::fromArray([
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 4, 'b' => 5, 'c' => 6],
    ['a' => 7, 'b' => 8, 'c' => 9],
]);

$resultingDf = $df->extract()->fromSqlQuery(" SELECT
                        a,
                        b
                        FROM dataframe
                        WHERE a = '4'
                        OR b = '2';
                    ");

// $resultingDf To Be:
[
    0 => ['a' => 1, 'b' => 2],
    1 => ['a' => 4, 'b' => 5]
]
```

## withFilter
```php
$df = DataFrame::fromArray([
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 4, 'b' => 5, 'c' => 6],
    ['a' => 7, 'b' => 8, 'c' => 9],
]);

$newDf = $df->extract()->withFilter(static function (array $record, int $key) {
    return $record['a'] > 4 || $record['a'] < 4;
});

$newDf->toArray();
// To Be:
[
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 7, 'b' => 8, 'c' => 9],
];
```

## Unique
```php
$df = DataFrame::fromArray([
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 1, 'b' => 3, 'c' => 4],
    ['a' => 2, 'b' => 4, 'c' => 5],
    ['a' => 2, 'b' => 4, 'c' => 6],
    ['a' => 3, 'b' => 5, 'c' => 7],
    ['a' => 3, 'b' => 5, 'c' => 8],
]);

$newDf = $df->extract()->unique('a');
$newDf->toArray():
// To Be:
[
    ['a' => 1],
    ['a' => 2],
    ['a' => 3],
];

$newDf = $df->extract()->unique(['a', 'b']);
$newDf->toArray():
// To Be:
[
    ['a' => 1, 'b' => 2],
    ['a' => 1, 'b' => 3],
    ['a' => 2, 'b' => 4],
    ['a' => 3, 'b' => 5],
];
```

#
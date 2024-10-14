# Delete

```php
$df->deleteRecord(key: 42);

// equivalent
unset($df[42]);

// equivalent
$df->delete()->record(key: 42);

// also equivalent
$df->delete()->filter(fn(array $record, int $position): bool => $position === 42);
```

## Execute
```php
    $df = DataFrame::fromArray([
        ['colA' => 1, 'colB' => 2, 'colC' => 3],
        ['colA' => 4, 'colB' => 5, 'colC' => 6],
        ['colA' => 7, 'colB' => 8, 'colC' => 9],
        ['colA' => 10, 'colB' => 11, 'colC' => 12],
        ['colA' => 13, 'colB' => 14, 'colC' => 15],
    ]);
    
    $df->delete()
        ->whereColumn('colB', equal: 5)
        ->or(fn (array $record): bool => $record['colA'] >= 10)
        ->execute();

    $df->toArray();
    // To Be:
    [
        0 => ['colA' => 1, 'colB' => 2, 'colC' => 3],
        2 => ['colA' => 7, 'colB' => 8, 'colC' => 9],
    ]
```

## Filter
```php
$df = DataFrame::fromArray([
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 4, 'b' => 5, 'c' => 6],
    ['a' => 7, 'b' => 8, 'c' => 9],
]);

$df->delete()->filter(static function (array $record, int $recordKey) {
    return $record['a'] > 4 || $record['a'] < 4;
});

$df->toArray();
// To Be:
[
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 7, 'b' => 8, 'c' => 9],
];
```

#
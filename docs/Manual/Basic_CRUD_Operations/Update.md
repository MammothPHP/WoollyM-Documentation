# Update

```php
$df->updateRecord(
    key: 42,
    recordArray: [
      'a' => 42,
      'b' => 42,
    ]
);

// equivalent to
$df[42] = [
    'a' => 42,
    'b' => 42,
];

// equivalent to
$df->update()->record(
    key: 42,
    recordArray: [
      'a' => 42,
      'b' => 42,
    ]
);
```


## Applying functions to each row
```php
$df->update()->apply(function ($record, $index) {
    $record['a'] = $record['c'] + 1;
    return $record;
});
```

## preg_replace
```php
    $df = new DataFrame([
        ['a' => 1, 'b' => 2, 'c' => 3],
        ['a' => 4, 'b' => 5, 'c' => 6],
        ['a' => 7, 'b' => 8, 'c' => 9],
    ]);
    
    $df->update()->preg_replace('/[1-5]/', 'foo');

    $df->toArray();
    // To Be:
    [
        ['a' => 'foo', 'b' => 'foo', 'c' => 'foo'],
        ['a' => 'foo', 'b' => 'foo', 'c' => 6],
        ['a' => 7, 'b' => 8, 'c' => 9],
    ];
```

## applyIndexMap
Apply new values to specific rows of the DataFrame using row index.

If column is supplied, will apply to column.
If column is absent, will apply to row.

Source:
```php
    $df = DataFrame::fromArray([
        ['a' => 1, 'b' => 2, 'c' => 3],
        ['a' => 4, 'b' => 5, 'c' => 6],
        ['a' => 7, 'b' => 8, 'c' => 9],
    ]);
```

By column:
```php
    $df->update()->applyIndexMap(
        map: [
            0 => 'foo',
            1 => fn($oldValue) => $oldValue * 2,
            2 => 'baz',
        ],
        column: 'a'
    );

    $df->toArray();
    // To Be:
    [
        ['a' => 'foo', 'b' => 2, 'c' => 3],
        ['a' => 8, 'b' => 5, 'c' => 6],
        ['a' => 'baz', 'b' => 8, 'c' => 9],
    ]
```

By row:
```php
    $df->update()->applyIndexMap(
        map: [
            1 => fn(array $oldRecord): array => array_map(fn(int $v): int => $v * 2, $oldRecord),
            2 => [ 'a' => 1, 'b' => 2, 'c' => 3 ],
        ]
    );

    $df->toArray();
    //To Be:
    [
        0 => ['a' => 1, 'b' => 2, 'c' => 3],
        1 => ['a' => 8, 'b' => 10, 'c' => 12],
        2 => ['a' => 1, 'b' => 2, 'c' => 3],
    ]
```


## Modification to a Selection

#### Applying functions to a selection directly
```php
$closure = fn (mixed $value, int $position) => $value + 3;

$df->col('a')->apply($closure);

// Equivalent to
$df->update('a')->apply($closure);
```

#### Set a value for each record in a column
```php
$df->col('a')->set(42);
```

#### Set DataFrame (single column) to a column
```php
$df->col('a')->set(new Dataframe( [[1],[2],[3]] ));
```

#### Set Column to a Column
```php
$df->col('a')->set($df->col('b')->asDataFrame);
```
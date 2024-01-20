# Insert

```php
$df->addRecord([
    'a' => 42,
    'b' => 42,
]);

// equivalent to
$df[] = [
    'a' => 42,
    'b' => 42,
];

// equivalent to
$df->insert()->record([
    'a' => 42,
    'b' => 42,
]);


// Multiples records from array, dataFrame or others iterables
$df->insert()->append([
    [
    'a' => 42,
    'b' => 42,
    ],
    [
    'a' => 42,
    'b' => 43,
    ],
]);
```
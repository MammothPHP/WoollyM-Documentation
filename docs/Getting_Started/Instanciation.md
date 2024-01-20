# Instantiation (basic)

## Instantiating from an array:

```php
use MammothPHP\WoollyM\DataFrame;

$arr = [
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 4, 'b' => 5, 'c' => 6],
    ['a' => 7, 'b' => 8, 'c' => 9],
];

$df = DataFrame::fromArray($arr);

// equivalent
$df = new DataFrame($arr);
```

## Import or export from/to an external source
Import (or export) from various sources including CSV, Excel, Json etc.

> [Import / Export modules documentation and examples](/Getting_Started/WorkingWithExternalsFormats/)

## Extracting the underlying two-dimensional array

```php
$myArray = $df->toArray();
print_r($myArray);
```

```php
[
    [0] => [
            [a] => 1
            [b] => 2
            [c] => 3
        ]

    [1] => [
            [a] => 4
            [b] => 5
            [c] => 6
        ]

    [2] => [
            [a] => 7
            [b] => 8
            [c] => 9
        ]
]
```

# Data Quick Overview

## Head
```php
$arr = $df->head(length: 3);

// To Be
[
    ['a' => 1, 'b' => 2, 'c' => 3],
    ['a' => 4, 'b' => 5, 'c' => 6],
    ['a' => 7, 'b' => 8, 'c' => 9],
]

$arr = $df->head(length: 3, offset: 1, columns:['a','c']);

// To Be
[
    ['a' => 4,  'c' => 6],
    ['a' => 7,  'c' => 9],
    ['a' => 10, 'c' => 12],
]
```
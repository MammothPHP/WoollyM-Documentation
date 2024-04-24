***

# Update





* Full name: `\MammothPHP\WoollyM\Statements\Update\Update`
* Parent class: [`Statement`](../Statement.md)




## Methods


### record

Update a record by key. Replace it totally by the new. If key does not exist, record will be created.

```php
public record(int $key, array $recordArray): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |
| `$recordArray` | **array** |  |





***

### mergeRecord

Update a record by key, addin or replace provided column, untouching others.

```php
public mergeRecord(int $key, array $mergeValue): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |
| `$mergeValue` | **array** |  |





***

### preg_replace

Replaces all occurences within the DataFrame of regex $pattern with string $replacement

```php
public preg_replace(array|string $pattern, array|string $replacement): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pattern` | **array&#124;string** |  |
| `$replacement` | **array&#124;string** |  |





***

### apply

Applies a user-defined function to each record of the DataFrame. The parameters of the function include the record
being iterated over, and optionally the index. ie: apply(function($el, $ix) { ... })

```php
public apply(\Closure $f): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$f` | **\Closure** |  |





***

### applyIndexMap

Apply new values to specific rows of the DataFrame using row index.

```php
public applyIndexMap(array|\ArrayAccess $map, ?string $column = null): \MammothPHP\WoollyM\DataFrame
```

If column is supplied, will apply to column.
If column is absent, will apply to row.

By column:
     $df->applyIndexMap([
         2 => 'foo',
         3 => function($old_value) { return $new_value; },
         5 => 'baz',
     ], 'a');

By row:
     $df->applyIndexMap([
         2 => function($old_row) { return $new_row; },
         3 => [ 'a' => 1, 'b' => 2, 'c' => 3 ],
     ]);






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$map` | **array&#124;\ArrayAccess** |  |
| `$column` | **?string** |  |





***

### convertTypes

Allows user to apply type default values to certain columns when necessary. This is usually utilized
in conjunction with a database to avoid certain invalid type defaults (ie: dates of 0000-00-00).

```php
public convertTypes(array $typeMap, array|string|null $fromDateFormat = null, ?string $toDateFormat = null): \MammothPHP\WoollyM\DataFrame
```

ie:
$df->mapTypes([
    'some_amount' => 'DECIMAL',
    'some_int'    => 'INT',
    'some_date'   => 'DATE'
], ['Y-m-d'], 'm/d/Y');






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$typeMap` | **array** |  |
| `$fromDateFormat` | **array&#124;string&#124;null** |  |
| `$toDateFormat` | **?string** |  |




**Throws:**

- [`Exception`](./Exception.md)



***


***
> Automatically generated on 2024-04-24

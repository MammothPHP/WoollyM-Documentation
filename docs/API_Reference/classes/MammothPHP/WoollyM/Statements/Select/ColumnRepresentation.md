***

# ColumnRepresentation

A special Select object restricted to a single column, implementing extra columns manipulation methods.



* Full name: `\MammothPHP\WoollyM\Statements\Select\ColumnRepresentation`
* Parent class: [`\MammothPHP\WoollyM\Statements\Select\FixedSelect`](./FixedSelect.md)
* This class implements:
[`\Stringable`](../../../../Stringable.md)



## Properties


### columnIndex



```php
protected \WeakReference $columnIndex
```






***

## Methods


### __construct



```php
public __construct(\MammothPHP\WoollyM\ColumnIndex $columnIndex): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnIndex` | **\MammothPHP\WoollyM\ColumnIndex** |  |





***

### isAlive



```php
public isAlive(): bool
```












***

### getName

Return the column name

```php
public getName(): string
```











**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***

### getSelect



```php
public getSelect(): array
```












***

### __toString



```php
public __toString(): string
```












***

### type

Convert all colonne data to a specified type

```php
public type(\MammothPHP\WoollyM\DataType $type, array|string|null $fromDateFormat = null, ?string $toDateFormat = null): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$type` | **\MammothPHP\WoollyM\DataType** |  |
| `$fromDateFormat` | **array&#124;string&#124;null** |  |
| `$toDateFormat` | **?string** |  |





***

### enforceType



```php
public enforceType(?\MammothPHP\WoollyM\DataType $type): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$type` | **?\MammothPHP\WoollyM\DataType** |  |




**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***

### remove

Remove the column from DataFrame

```php
public remove(): void
```











**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)

- [`Exception`](../../../../Exception.md)



***

### rename

Rename column

```php
public rename(string $to): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$to` | **string** |  |




**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***

### set

Set a value or apply a closure to all value selected.

```php
public set( $set): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$set` | **** | - The value to set or the closure to apply. |




**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)

- [`DataFrameException`](../../Exceptions/DataFrameException.md)



***

### setDataFrame

Merge DataFrame to the column value from the beginning.

```php
private setDataFrame( $df): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$df` | **** | - Single column dataFrame |




**Throws:**

- [`DataFrameException`](../../Exceptions/DataFrameException.md)

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***

### apply

Apply a closure return to all selected elements.

```php
public apply(\Closure $f): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$f` | **\Closure** |  |




**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***

### setColumnValue

Set value to all selected elements.

```php
public setColumnValue(mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | **mixed** |  |




**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***


## Inherited methods


### record

Get a record by key

```php
public record(int $key): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |





***

### export

Export Selection as a new Dataframe object

```php
public export(): \MammothPHP\WoollyM\DataFrame
```











**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***

### toArray

Get selection as PHP array

```php
public toArray(): array&lt;int,array&gt;
```












***

### countRecords

Count Records in statement

```php
public countRecords(): int
```












***


***
> Automatically generated on 2024-04-24

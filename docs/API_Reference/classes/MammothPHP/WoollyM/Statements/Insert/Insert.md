***

# Insert





* Full name: `\MammothPHP\WoollyM\Statements\Insert\Insert`




## Methods


### record

Add a record.

```php
public record(array $recordArray): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordArray` | **array** |  |





***

### append

Allows user to "array_merge" two DataFrames so that the rows of one are appended to the rows of current DataFrame object

```php
public append(mixed $iterable): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$iterable` | **mixed** | - The one to add to the current. |





***

### setColumn



```php
public setColumn(string $targetColumn, mixed $rightHandSide): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$targetColumn` | **string** |  |
| `$rightHandSide` | **mixed** |  |





***


## Inherited methods


### setLinkedDataFrame



```php
protected setLinkedDataFrame(\MammothPHP\WoollyM\DataFrame $df): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$df` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### getLinkedDataFrame

Get the Linked DataFrame object

```php
public getLinkedDataFrame(): \MammothPHP\WoollyM\DataFrame
```











**Throws:**

- [`InvalidSelectException`](../../Exceptions/InvalidSelectException.md)



***


***
> Automatically generated on 2024-07-03

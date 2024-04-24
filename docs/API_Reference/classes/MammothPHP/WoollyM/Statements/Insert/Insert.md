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
public append( $iterable): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$iterable` | **** | - The one to add to the current. |





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


***
> Automatically generated on 2024-04-24

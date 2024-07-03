***

# Select





* Full name: `\MammothPHP\WoollyM\Statements\Select\Select`
* Parent class: [`Statement`](../Statement.md)
* This class implements:
[`\Countable`](../../../../Countable.md)




## Methods


### record

Get a record by key

```php
public record(int $key): \MammothPHP\WoollyM\Record
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

### groupBy



```php
public groupBy(string|\MammothPHP\WoollyM\Stats\AggProvider $args): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$args` | **string&#124;\MammothPHP\WoollyM\Stats\AggProvider** |  |





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
> Automatically generated on 2024-07-03

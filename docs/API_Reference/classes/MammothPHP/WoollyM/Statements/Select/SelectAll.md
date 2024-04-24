***

# SelectAll





* Full name: `\MammothPHP\WoollyM\Statements\Select\SelectAll`
* Parent class: [`\MammothPHP\WoollyM\Statements\Select\FixedSelect`](./FixedSelect.md)






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

***

# Delete





* Full name: `\MammothPHP\WoollyM\Statements\Delete\Delete`
* Parent class: [`Statement`](../Statement.md)




## Methods


### execute

Delete all the records from a statement

```php
public execute(): \MammothPHP\WoollyM\DataFrame
```












***

### record

Delete a record by key

```php
public record(int $key): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |




**Throws:**

- [`KeyNotExistException`](../../DataDrivers/DriversExceptions/KeyNotExistException.md)



***

### filter

Remove record if closure return true

```php
public filter(mixed $f): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$f` | **mixed** | - ex: fn(array recordData, int $recordKey): bool =&gt; ... |





***


***
> Automatically generated on 2024-07-03

***

# Record





* Full name: `\MammothPHP\WoollyM\Record`
* This class implements:
[`\ArrayAccess`](../../ArrayAccess.md), [`\Countable`](../../Countable.md), [`\Iterator`](../../Iterator.md)



## Properties


### dataFrame



```php
public \WeakReference $dataFrame
```






***

### recordKey



```php
public int|string $recordKey
```






***

### recordArray



```php
protected array $recordArray
```






***

## Methods


### __construct



```php
public __construct(\MammothPHP\WoollyM\DataFrame $dataFrame, int|string $recordKey, array $recordArray): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$dataFrame` | **\MammothPHP\WoollyM\DataFrame** |  |
| `$recordKey` | **int&#124;string** |  |
| `$recordArray` | **array** |  |





***

### toArray



```php
public toArray(): array
```












***

### toContextualArray



```php
public toContextualArray(): array
```












***

### hasColumn



```php
public hasColumn(string $columnName): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnName` | **string** |  |





***

### getDataFrame



```php
public getDataFrame(): ?\MammothPHP\WoollyM\DataFrame
```












***

### count



```php
public count(): int
```












***

### offsetExists



```php
public offsetExists(mixed $offset): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$offset` | **mixed** |  |





***

### offsetGet



```php
public offsetGet(mixed $offset): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$offset` | **mixed** |  |





***

### offsetSet



```php
public offsetSet(mixed $offset, mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$offset` | **mixed** |  |
| `$value` | **mixed** |  |





***

### offsetUnset



```php
public offsetUnset(mixed $offset): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$offset` | **mixed** |  |





***

### rewind



```php
public rewind(): void
```












***

### current



```php
public current(): mixed
```












***

### key



```php
public key(): ?string
```












***

### next



```php
public next(): void
```












***

### valid



```php
public valid(): bool
```












***


***
> Automatically generated on 2024-07-03

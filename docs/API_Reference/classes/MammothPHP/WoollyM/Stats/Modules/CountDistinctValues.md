***

# CountDistinctValues





* Full name: `\MammothPHP\WoollyM\Stats\Modules\CountDistinctValues`
* Parent class: [`\MammothPHP\WoollyM\Stats\Modules\AbstractAgg`](./AbstractAgg.md)


## Constants

| Constant | Visibility | Type | Value |
|:---------|:-----------|:-----|:------|
|`NAME`|public| |&#039;countDistinctValues&#039;|
|`HASH_ALGO`|public| |&#039;sha3-256&#039;|
|`HASH_START_AT`|public| |256|

## Properties


### distinctScalar



```php
protected array $distinctScalar
```






***

### distinctFloat



```php
protected array $distinctFloat
```






***

### distinctObject



```php
protected \SplObjectStorage $distinctObject
```






***

### hasTrue



```php
protected int $hasTrue
```






***

### hasFalse



```php
protected int $hasFalse
```






***

### distinctHash



```php
protected array $distinctHash
```






***

## Methods


### getResult



```php
public getResult(): int|float
```












***

### addValue



```php
public addValue(mixed $value): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | **mixed** |  |





***


## Inherited methods


### col



```php
public static col(string $column, ?string $as = null): \MammothPHP\WoollyM\Stats\AggProvider
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$column` | **string** |  |
| `$as` | **?string** |  |





***

### executeProperty



```php
public executeProperty(\MammothPHP\WoollyM\Statements\Select\Select $select): int|float|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$select` | **\MammothPHP\WoollyM\Statements\Select\Select** |  |





***

### executeMethod



```php
public executeMethod(\MammothPHP\WoollyM\Statements\Select\Select $select, array $arguments): int|float|null
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$select` | **\MammothPHP\WoollyM\Statements\Select\Select** |  |
| `$arguments` | **array** |  |





***

### addValue



```php
public addValue(mixed $value): void
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | **mixed** |  |





***

### getResult



```php
public getResult(): int|float|null
```












***

### execute



```php
protected execute(\MammothPHP\WoollyM\Statements\Select\Select $select): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$select` | **\MammothPHP\WoollyM\Statements\Select\Select** |  |





***


***
> Automatically generated on 2024-07-03

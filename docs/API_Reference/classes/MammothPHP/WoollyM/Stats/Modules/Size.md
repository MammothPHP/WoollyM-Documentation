***

# Size





* Full name: `\MammothPHP\WoollyM\Stats\Modules\Size`
* Parent class: [`\MammothPHP\WoollyM\Stats\Modules\AbstractAgg`](./AbstractAgg.md)


## Constants

| Constant | Visibility | Type | Value |
|:---------|:-----------|:-----|:------|
|`NAME`|public| |&#039;size&#039;|

## Properties


### isInitializated



```php
protected bool $isInitializated
```






***

### ignoreNonNumericValue



```php
public bool $ignoreNonNumericValue
```






***

### ignoreNullValue



```php
public bool $ignoreNullValue
```






***

## Methods


### init



```php
public init(bool $ignoreNonNumericValue = false, bool $ignoreNullValue = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$ignoreNonNumericValue` | **bool** |  |
| `$ignoreNullValue` | **bool** |  |





***

### executeMethod



```php
public executeMethod(\MammothPHP\WoollyM\Statements\Select\Select $select, array $arguments): int
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








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$value` | **mixed** |  |





***

### execute



```php
protected execute(\MammothPHP\WoollyM\Statements\Select\Select $select, bool $ignoreNonNumericValue = false, bool $ignoreNullValue = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$select` | **\MammothPHP\WoollyM\Statements\Select\Select** |  |
| `$ignoreNonNumericValue` | **bool** |  |
| `$ignoreNullValue` | **bool** |  |





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

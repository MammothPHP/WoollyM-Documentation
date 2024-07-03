***

# AbstractMinMaxMax





* Full name: `\MammothPHP\WoollyM\Stats\Modules\AbstractMinMaxMax`
* Parent class: [`\MammothPHP\WoollyM\Stats\Modules\AbstractAgg`](./AbstractAgg.md)
* This class is an **Abstract class**



## Properties


### isFirst



```php
protected bool $isFirst
```






***

## Methods


### compare



```php
protected compare(int|float $a, int|float $b): bool
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$a` | **int&#124;float** |  |
| `$b` | **int&#124;float** |  |





***

### getResult



```php
public getResult(): int|float|null
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

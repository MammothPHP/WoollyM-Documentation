***

# MinMaxMaxAbstract





* Full name: `\MammothPHP\WoollyM\Stats\Modules\MinMaxMaxAbstract`
* This class implements:
[`\MammothPHP\WoollyM\Stats\StatsMethodInterface`](../StatsMethodInterface.md), [`\MammothPHP\WoollyM\Stats\StatsPropertyInterface`](../StatsPropertyInterface.md)
* This class is an **Abstract class**




## Methods


### executeProperty



```php
public executeProperty(\MammothPHP\WoollyM\Statements\Select\Select $select): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$select` | **\MammothPHP\WoollyM\Statements\Select\Select** |  |





***

### executeMethod



```php
public executeMethod(\MammothPHP\WoollyM\Statements\Select\Select $select, array $arguments): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$select` | **\MammothPHP\WoollyM\Statements\Select\Select** |  |
| `$arguments` | **array** |  |





***

### compare



```php
protected compare(mixed $a, mixed $b): bool
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$a` | **mixed** |  |
| `$b` | **mixed** |  |





***

### execute



```php
protected execute(\MammothPHP\WoollyM\Statements\Select\Select $select): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$select` | **\MammothPHP\WoollyM\Statements\Select\Select** |  |





***


***
> Automatically generated on 2024-04-24

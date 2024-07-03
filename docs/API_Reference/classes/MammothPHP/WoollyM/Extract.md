***

# Extract





* Full name: `\MammothPHP\WoollyM\Extract`



## Properties


### dataDriver



```php
public ?\MammothPHP\WoollyM\DataDrivers\DataDriverInterface $dataDriver
```






***

### to



```php
public \MammothPHP\WoollyM\DataFrame $to
```






***

## Methods


### __construct



```php
public __construct(\MammothPHP\WoollyM\DataFrame $df, \MammothPHP\WoollyM\DataFrame $to): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$df` | **\MammothPHP\WoollyM\DataFrame** |  |
| `$to` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### clone



```php
public clone(): \MammothPHP\WoollyM\DataFrame
```












***

### withFilter

Filter DataFrame rows using user-defined function. The parameters of the function include the row
being iterated over, and the index.

```php
public withFilter(\Closure $f): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$f` | **\Closure** |  |





***

### unique

Returns unique values of given column(s)

```php
public unique(array|string $onColumns): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$onColumns` | **array&#124;string** |  |





***

### fromSqlQuery

Allows SQL to be used to perform operations on the DataFrame
Table name will always be 'dataframe'

```php
public fromSqlQuery(string $sql): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$sql` | **string** |  |




**Throws:**

- [`DataFrameException`](./DataFrameException.md)



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

- [`InvalidSelectException`](./Exceptions/InvalidSelectException.md)



***


***
> Automatically generated on 2024-07-03

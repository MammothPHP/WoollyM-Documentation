***

# HTML





* Full name: `\MammothPHP\WoollyM\IO\HTML`



## Properties


### pretty



```php
public bool $pretty
```






***

### limit



```php
public ?int $limit
```






***

### offset



```php
public ?int $offset
```






***

### class



```php
public ?string $class
```






***

### id



```php
public ?string $id
```






***

## Methods


### toString



```php
public toString(bool $pretty = true, ?int $limit = null, ?int $offset, ?string $class = null, ?string $id = null): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pretty` | **bool** |  |
| `$limit` | **?int** |  |
| `$offset` | **?int** |  |
| `$class` | **?string** |  |
| `$id` | **?string** |  |





***


## Inherited methods


### fromDataFrame



```php
public static fromDataFrame(\MammothPHP\WoollyM\DataFrame $df): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$df` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### prepareToFileInput



```php
protected prepareToFileInput(mixed $file, bool $overwriteFile): \SplFileObject|false
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$file` | **mixed** |  |
| `$overwriteFile` | **bool** |  |





***


***
> Automatically generated on 2024-04-24

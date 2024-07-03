***

# Builder





* Full name: `\MammothPHP\WoollyM\IO\Builder`
* This class is an **Abstract class**



## Properties


### file



```php
public \SplFileInfo $file
```






***

### input



```php
public string $input
```






***

## Methods


### fromFilePath



```php
public static fromFilePath(string $path): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$path` | **string** |  |





***

### fromFileInfo



```php
public static fromFileInfo(\SplFileInfo $file): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$file` | **\SplFileInfo** |  |





***

### fromString



```php
public static fromString(string $input): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$input` | **string** |  |





***

### convertSplFileToString



```php
protected convertSplFileToString(): string
```












***

### import



```php
public import(\MammothPHP\WoollyM\DataFrame $to = new DataFrame()): \MammothPHP\WoollyM\DataFrame
```




* This method is **abstract**.



**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$to` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### toArray



```php
public toArray(): array
```












***


***
> Automatically generated on 2024-07-03

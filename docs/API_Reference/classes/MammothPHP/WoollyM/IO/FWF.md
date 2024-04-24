***

# FWF





* Full name: `\MammothPHP\WoollyM\IO\FWF`
* Parent class: [`\MammothPHP\WoollyM\IO\Builder`](./Builder.md)



## Properties


### colSpecs

Colspecs

```php
public array $colSpecs
```






***

### includeRegexOpt

Whitelist regex to apply to each line of the file

```php
public ?string $includeRegexOpt
```






***

### excludeRegexOpt

Blacklist regex to apply to each line of the file

```php
public ?string $excludeRegexOpt
```






***

## Methods


### format

Apply formats options

```php
public format(array $colSpecs): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$colSpecs` | **array** |  |





***

### filter

Apply filter options

```php
public filter(?string $includeRegexOpt = null, ?string $excludeRegexOpt = null): self
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$includeRegexOpt` | **?string** |  |
| `$excludeRegexOpt` | **?string** |  |





***

### import



```php
public import(\MammothPHP\WoollyM\DataFrame $to = new DataFrame()): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$to` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### loadFile

Loads the file which the FWF class was instantiated with.

```php
protected loadFile(string $fileData): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$fileData` | **string** |  |





***

### applyColSpecs

Parses a string of data based on the rules defined in user provided colspecs.

```php
private applyColSpecs(string $data, array $colSpecs): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **string** |  |
| `$colSpecs` | **array** |  |





***


## Inherited methods


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
> Automatically generated on 2024-04-24

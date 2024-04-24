***

# JSON





* Full name: `\MammothPHP\WoollyM\IO\JSON`
* Parent class: [`\MammothPHP\WoollyM\IO\Builder`](./Builder.md)



## Properties


### jsonItems



```php
public \JsonMachine\Items $jsonItems
```






***

## Methods


### import



```php
public import(\MammothPHP\WoollyM\DataFrame $to = new DataFrame()): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$to` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### toFile

Encodes a DataFrame into a JSON file

```php
public toFile(string|\SplFileInfo $file, bool $overwriteFile = false, bool $pretty = false): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$file` | **string&#124;\SplFileInfo** |  |
| `$overwriteFile` | **bool** |  |
| `$pretty` | **bool** |  |





***

### toString

Encodes a DataFrame array into a JSON string.

```php
public toString(bool $pretty = false): string
```

pretty: Will "prettify" the rendered JSON (default: false)






**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pretty` | **bool** |  |




**Throws:**

- [`NotYetImplementedException`](../Exceptions/NotYetImplementedException.md)

- [`UnknownOptionException`](../Exceptions/UnknownOptionException.md)



***

### itemsFromFile

Decodes a JSON string into a DataFrame array.

```php
protected itemsFromFile(): void
```











**Throws:**

- [`UnknownOptionException`](../Exceptions/UnknownOptionException.md)



***

### itemsFromString



```php
protected itemsFromString(): void
```












***

### importFromJsonItems



```php
protected importFromJsonItems(\MammothPHP\WoollyM\DataFrame $df): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$df` | **\MammothPHP\WoollyM\DataFrame** |  |





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

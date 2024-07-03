***

# CSV





* Full name: `\MammothPHP\WoollyM\IO\CSV`
* Parent class: [`\MammothPHP\WoollyM\IO\Builder`](./Builder.md)


## Constants

| Constant | Visibility | Type | Value |
|:---------|:-----------|:-----|:------|
|`DEFAULT_DELIMITER`|public| |&#039;,&#039;|
|`DEFAULT_ENCLOSURE`|public| |&#039;&quot;&#039;|
|`DEFAULT_ESCAPE`|public| |&#039;\\&#039;|
|`DEFAULT_HEADER_OFFSET`|public| |0|
|`DEFAULT_COLUMNS`|public| |null|
|`DEFAULT_ONLY_COLUMNS`|public| |false|
|`DEFAULT_MAPPING`|public| |null|

## Properties


### csvReader



```php
public \League\Csv\Reader $csvReader
```






***

### ressource



```php
public mixed $ressource
```






***

### delimiter



```php
public string $delimiter
```






***

### enclosure



```php
public string $enclosure
```






***

### escape



```php
public string $escape
```






***

### headerOffset



```php
public ?int $headerOffset
```






***

### columns



```php
public ?array $columns
```






***

### onlyColumns



```php
public array|false $onlyColumns
```






***

### mapping



```php
public ?array $mapping
```






***

## Methods


### fromCsvReader



```php
public static fromCsvReader(\League\Csv\Reader $csvReader): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$csvReader` | **\League\Csv\Reader** |  |





***

### fromStream



```php
public static fromStream(mixed $stream): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$stream` | **mixed** |  |





***

### format

Format options. If a parameter is null, default value or set previous parameter set for object will be applied.

```php
public format(string $delimiter = self::DEFAULT_DELIMITER, string $enclosure = self::DEFAULT_ENCLOSURE, string $escape = self::DEFAULT_ESCAPE, mixed $headerOffset = self::DEFAULT_HEADER_OFFSET, mixed $columns = self::DEFAULT_COLUMNS, mixed $mapping = self::DEFAULT_MAPPING): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$delimiter` | **string** |  |
| `$enclosure` | **string** |  |
| `$escape` | **string** |  |
| `$headerOffset` | **mixed** | - To be 0 if no header line is present, else number of lines to ignore |
| `$columns` | **mixed** | - Ordered array of columns, only if $headerOffset is false |
| `$mapping` | **mixed** | - Change a colonne name to another |





***

### filter

Filter CSV input

```php
public filter(mixed $onlyColumns): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$onlyColumns` | **mixed** | - Restrict import to theses columns, as column string name from header or $columns |





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

### applyOptions



```php
protected applyOptions(\League\Csv\AbstractCsv $csv): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$csv` | **\League\Csv\AbstractCsv** |  |





***

### ReaderFromFileObject



```php
protected ReaderFromFileObject(bool& $applyOptions): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$applyOptions` | **bool** |  |





***

### ReaderFromString



```php
protected ReaderFromString(): void
```












***

### ReaderFromStream



```php
protected ReaderFromStream(): void
```












***

### importFromCsvReader



```php
protected importFromCsvReader(\MammothPHP\WoollyM\DataFrame $to): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$to` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### toFile

Write CSV from dataFrame to a file

```php
public toFile(string|\SplFileInfo|\League\Csv\Writer $file, bool $overwriteFile = false, bool $writeHeader = true): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$file` | **string&#124;\SplFileInfo&#124;\League\Csv\Writer** |  |
| `$overwriteFile` | **bool** |  |
| `$writeHeader` | **bool** |  |





***

### toStream

Write CSV from dataFrame to a stream resource

```php
public toStream(mixed $phpStream, bool $writeHeader = true): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$phpStream` | **mixed** |  |
| `$writeHeader` | **bool** |  |





***

### toString

Write CSV from dataFrame to a string

```php
public toString(bool $writeHeader = true): string
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$writeHeader` | **bool** |  |





***

### writeCsv



```php
protected writeCsv(\League\Csv\Writer $writer, bool $writeHeader): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$writer` | **\League\Csv\Writer** |  |
| `$writeHeader` | **bool** |  |





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
> Automatically generated on 2024-07-03

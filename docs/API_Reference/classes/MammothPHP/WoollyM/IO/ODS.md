***

# ODS





* Full name: `\MammothPHP\WoollyM\IO\ODS`
* Parent class: [`\MammothPHP\WoollyM\IO\XLSX`](./XLSX.md)




## Methods


### getWriter



```php
protected getWriter(\PhpOffice\PhpSpreadsheet\Spreadsheet $spreadsheet): \PhpOffice\PhpSpreadsheet\Writer\Ods
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$spreadsheet` | **\PhpOffice\PhpSpreadsheet\Spreadsheet** |  |





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

### format



```php
public format(?string $sheetName = self::DEFAULT_SHEET_NAME, mixed $colRow = self::DEFAULT_COLROW): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$sheetName` | **?string** |  |
| `$colRow` | **mixed** | - Parse data after specified line (starting at 1), and consider this line at the header. Set to 0 for no header. |





***

### loadFile

Loads the file which the CSV class was instantiated with.

```php
protected loadFile(string $file): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$file` | **string** |  |




**Throws:**

- [`UnknownOptionException`](../Exceptions/UnknownOptionException.md)

- [`Exception`](../../../PhpOffice/PhpSpreadsheet/Exception.md)



***

### getWriter



```php
protected getWriter(\PhpOffice\PhpSpreadsheet\Spreadsheet $spreadsheet): \PhpOffice\PhpSpreadsheet\Writer\BaseWriter
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$spreadsheet` | **\PhpOffice\PhpSpreadsheet\Spreadsheet** |  |





***

### toFile

Write an Excel file

```php
public toFile(string|\SplFileInfo $file, bool $overwriteFile = false, string $worksheetTitle = &#039;DataFrame&#039;): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$file` | **string&#124;\SplFileInfo** |  |
| `$overwriteFile` | **bool** |  |
| `$worksheetTitle` | **string** |  |





***

### toExcelSpreadsheet

Converts the columns and data passed to an XLSX worksheet and adds that worksheet to an instance of PHPExcel

```php
public toExcelSpreadsheet(\PhpOffice\PhpSpreadsheet\Spreadsheet $spreadsheet, string $worksheetTitle = &#039;DataFrame&#039;): \PhpOffice\PhpSpreadsheet\Worksheet\Worksheet
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$spreadsheet` | **\PhpOffice\PhpSpreadsheet\Spreadsheet** |  |
| `$worksheetTitle` | **string** |  |




**Throws:**

- [`Exception`](../../../PhpOffice/PhpSpreadsheet/Exception.md)



***


***
> Automatically generated on 2024-07-03

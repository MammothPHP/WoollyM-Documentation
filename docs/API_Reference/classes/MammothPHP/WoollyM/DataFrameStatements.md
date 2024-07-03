***

# DataFrameStatements





* Full name: `\MammothPHP\WoollyM\DataFrameStatements`
* Parent class: [`\MammothPHP\WoollyM\DataFrameAccessors`](./DataFrameAccessors.md)
* This class is an **Abstract class**




## Methods


### select

Return a Select object

```php
public select(string[] $selections): \MammothPHP\WoollyM\Statements\Select\Select
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$selections` | **string[]** | column(s) name(s) to select |





***

### selectAll

Return a fixed selectAll object

```php
public selectAll(): \MammothPHP\WoollyM\Statements\Select\SelectAll
```












***

### col

Return a ColumnRepresentation object, extending Select object.

```php
public col(string $columnName): \MammothPHP\WoollyM\Statements\Select\ColumnRepresentation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnName` | **string** |  |




**Throws:**

- [`InvalidSelectException`](./Exceptions/InvalidSelectException.md)



***

### column

Alias for col() method.

```php
public column(string $columnName): \MammothPHP\WoollyM\Statements\Select\ColumnRepresentation
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnName` | **string** |  |





***


## Inherited methods


### insert



```php
public insert(): \MammothPHP\WoollyM\Statements\Insert\Insert
```




* This method is **abstract**.







***

### __construct



```php
public __construct(array&lt;int,array&gt; $data = [], mixed $dataDriver = null): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$data` | **array<int,array>** | Array data to ingest |
| `$dataDriver` | **mixed** | - Class of custom driver to use. if null, the PhpArray (in-memory) driver will used. |




**Throws:**

- [`InvalidDriverClassException`](./DataDrivers/DriversExceptions/InvalidDriverClassException.md)



***

### __clone



```php
public __clone(): mixed
```












***

### addColumn

Adds a new column to the DataFrame. If column already exist, then nothing will happen.

```php
public addColumn(string $columnName): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnName` | **string** |  |





***

### addColumns

Adds multiple columns to the DataFrame.

```php
public addColumns(string[] $columnNames): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnNames` | **string[]** |  |





***

### removeColumn

Removes a column (and all associated data) from the DataFrame.

```php
public removeColumn(string $columnName): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnName` | **string** |  |





***

### hasColumn

Returns a boolean of whether the specified column exists.

```php
public hasColumn(\MammothPHP\WoollyM\Statements\Select\ColumnRepresentation|string $column): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$column` | **\MammothPHP\WoollyM\Statements\Select\ColumnRepresentation&#124;string** |  |





***

### countColumns

Count unique columns already known

```php
public countColumns(): int
```












***

### columns

Return ColumnRepresentation Object extending Select object

```php
public columns(): array&lt;int,\MammothPHP\WoollyM\Statements\Select\ColumnRepresentation&gt;
```












***

### columnsNames

Get unique columns already known

```php
public columnsNames(): array&lt;int,string&gt;
```












***

### mustHaveColumn

Assertion that the DataFrame must have the column specified. If not then an exception is thrown.

```php
public mustHaveColumn(string $columnName): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnName` | **string** |  |




**Throws:**

- [`InvalidSelectException`](./Exceptions/InvalidSelectException.md)



***

### getColumnKey



```php
protected getColumnKey(string $columnName): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnName` | **string** |  |





***

### createColumnRepresentation



```php
protected createColumnRepresentation(\MammothPHP\WoollyM\ColumnIndex $columnIndex): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columnIndex` | **\MammothPHP\WoollyM\ColumnIndex** |  |





***

### addRecord

Add a record, providing an array indexed by column => value

```php
public addRecord(array&lt;string,mixed&gt; $recordArray): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordArray` | **array<string,mixed>** |  |





***

### updateRecord

Update a record by record key. If key does not exist, record will be created.

```php
public updateRecord(int $key, array $recordArray): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |
| `$recordArray` | **array** |  |





***

### updateCell



```php
public updateCell(int $recordKey, string $column, mixed $newValue): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordKey` | **int** |  |
| `$column` | **string** |  |
| `$newValue` | **mixed** |  |





***

### removeRecord

Remove a record by key

```php
public removeRecord(int $key): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |




**Throws:**

- [`KeyNotExistException`](./DataDrivers/DriversExceptions/KeyNotExistException.md)



***

### getRecord

Get a record by key

```php
public getRecord(int $key): array&lt;string,array&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |





***

### getRecordAsArray

Get a record by key and return an array

```php
public getRecordAsArray(int $key): array&lt;string,array&gt;
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$key` | **int** |  |





***

### recordKeyExist

Check if a record key exist

```php
public recordKeyExist(int $recordKey): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordKey` | **int** |  |





***

### convertRecordToAbstract



```php
protected convertRecordToAbstract(array $recordArray): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordArray` | **array** |  |





***

### convertAbstractToRecordObject



```php
protected convertAbstractToRecordObject(array $abstractRecord): \MammothPHP\WoollyM\Record
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$abstractRecord` | **array** |  |





***

### toArray

Outputs a DataFrame as a two-dimensional associative array.

```php
public toArray(bool $fillInNonExistentCol = false): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$fillInNonExistentCol` | **bool** |  |





***

### initDriverIterator



```php
protected initDriverIterator(): void
```












***

### getRecordsAsArrayIterator



```php
public getRecordsAsArrayIterator(bool $fillAllColumn = false): \Iterator
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$fillAllColumn` | **bool** |  |





***


***
> Automatically generated on 2024-07-03

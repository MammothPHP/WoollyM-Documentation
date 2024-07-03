***

# SQL





* Full name: `\MammothPHP\WoollyM\IO\SQL`



## Properties


### chunkSize



```php
public int $chunkSize
```






***

### replace



```php
public bool $replace
```






***

### ignore



```php
public bool $ignore
```






***

### pdo



```php
public \PDO $pdo
```






***

### query



```php
public string $query
```






***

### preparedStatement



```php
protected \PDOStatement $preparedStatement
```






***

### statementCacheKey



```php
protected string $statementCacheKey
```






***

## Methods


### configurePdo



```php
protected static configurePdo(\PDO $pdo): \PDO
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pdo` | **\PDO** |  |





***

### fromSql



```php
public static fromSql(\PDO $pdo, string $query): static
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pdo` | **\PDO** |  |
| `$query` | **string** |  |





***

### import



```php
public import(\MammothPHP\WoollyM\DataFrame $df = new DataFrame()): \MammothPHP\WoollyM\DataFrame
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$df` | **\MammothPHP\WoollyM\DataFrame** |  |





***

### toPDO



```php
public toPDO(\PDO $pdo, string $tableName): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$pdo` | **\PDO** |  |
| `$tableName` | **string** |  |





***

### options



```php
public options(mixed $chunkSize = 500, mixed $replace = false, mixed $ignore = false): static
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$chunkSize` | **mixed** | - Insert chunk size |
| `$replace` | **mixed** | - Use a sql replace statement |
| `$ignore` | **mixed** | - Use a sql ignore statement |





***

### insertInto

Performs a SQL insert transaction to provided table, crafting the SQL statement using an array of columns
and a two-dimensional array of data.

```php
protected insertInto(string $tableName): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tableName` | **string** |  |




**Throws:**

- [`InvalidSelectException`](../Exceptions/InvalidSelectException.md)



***

### insertChunkedData

Transforms and executes a series of prepared statements from a chunked array.

```php
protected insertChunkedData(string $tableName, array $columns, array $data): int
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tableName` | **string** |  |
| `$columns` | **array** |  |
| `$data` | **array** |  |





***

### createPreparedStatement

Transforms a table string, array of columns, and array of data into a prepared statement.

```php
protected createPreparedStatement(string $tableName, array $columns, int $rows): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$tableName` | **string** |  |
| `$columns` | **array** |  |
| `$rows` | **int** |  |





***

### identifyAnyMissingColumns

Identifies any missing columns in the database which we may be attempting to insert.

```php
protected identifyAnyMissingColumns(array $columns, string $tableName): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$columns` | **array** |  |
| `$tableName` | **string** |  |




**Throws:**

- [`InvalidSelectException`](../Exceptions/InvalidSelectException.md)



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
> Automatically generated on 2024-07-03

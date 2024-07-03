***

# DataDriverInterface





* Full name: `\MammothPHP\WoollyM\DataDrivers\DataDriverInterface`
* Parent interfaces: [`Countable`](../../../Countable.md), [`IteratorAggregate`](../../../IteratorAggregate.md)

## Constants

| Constant | Visibility | Type | Value |
|:---------|:-----------|:-----|:------|
|`COLUMN_KEY_TYPE`|public| |\MammothPHP\WoollyM\DataDrivers\ColumnKeyType::COLUMN_KEY|

## Methods


### getRecordKey



```php
public getRecordKey(int $recordKey): array
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordKey` | **int** |  |





***

### setRecord



```php
public setRecord(int $recordKey, array $recordData): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordKey` | **int** |  |
| `$recordData` | **array** |  |





***

### setRecordColumn



```php
public setRecordColumn(int $recordKey, int|string $columnKey, mixed $colValue): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordKey` | **int** |  |
| `$columnKey` | **int&#124;string** |  |
| `$colValue` | **mixed** |  |





***

### addRecord



```php
public addRecord(array $recordData): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordData` | **array** |  |





***

### removeRecord



```php
public removeRecord(int $recordKey): void
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordKey` | **int** |  |





***

### keyExist



```php
public keyExist(int $recordKey): bool
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$recordKey` | **int** |  |





***


***
> Automatically generated on 2024-07-03

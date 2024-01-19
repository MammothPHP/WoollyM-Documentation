# The Select Statement
The `Select` object represents a statement to explore au subset of data corresponding to selection and doing stats with them. You can build them using a SQL-like constructor. They offer some commodity helpers methods to modify or extract directly the selected data, but it's not its main purpose.

## The three different types of Select statements
```php
$df->select('colA', 'colB'): Select // Return Select
$df->selectAll(): SelectAll // With all columns, and keep the  selection in returned select object even if columns are aded or deleted to the dataframe.
$df->col('colA'): ColunRepresentation // A classic select with extra methods to rename, remove, clone, type the selected column.
```

## Filter & Limit the Select statements
Create a statement containing 2 two columns, where columnB is > 42, limit to 100 rows but start à offset 10.

```php
$stmt = $df->select('column1','colum2')
    ->where(fn($record, $recordKey) => $record['columnB'] > 42)
    ->limit(100)
    ->offset(10);
```

Or select all column
```php
$stmt = $df->selectAll();
```

Complex where statement
```php
$stmt = $df->selectAll()->where(fn($r) => true)->and(...)->or(...)->or()->and();
```

is SQL equivalent to:
```sql
WHERE contition AND (condition OR condition OR condition) AND condition
```

Simpler Where clause
```php
$stmt = $df->selectAll()->whereColumnEqual('colA', 42);
$stmt = $df->selectAll()->whereKeyBetween(1, 42);
```

Statement are Traversable
```php
foreach($df->selectAll()->where(fn($r) => $r) as $recordKey => $record) {
    // ...
}
```

## Extract from a Select Statement

Return the result as a new DataFrame object:
```php
$newDf = $df->select('colA','colC')->whereColumnEqual('colB', 42)->export();
```

Or directly to an array:
```php
$newArr = $stmt->toArray();

// equivalent to (but slower)
$newArr = $stmt->export()->toArray();
```

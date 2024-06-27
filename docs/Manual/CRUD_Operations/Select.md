# Select

## Basically, get records

### By key
By key :
```php
$df->select()->record(key: 42); // Return record array

// equivalent to
$df->getRecord(key: 42);

// equivalent to
$df[42];
```

### Traversable
Both [dataframe](../Dataframe_Object.md#iterating-over-records) and [select statement](Principles#statements-are-traversable) object are traversable to iterate records. Have a look to corresponding documentation.

## The Select Statement
The `Select` object represents a statement to explore au subset of data corresponding to selection and doing stats with them. You can build them using a SQL-like constructor. They offer some commodity helpers methods to modify or extract directly the selected data, but it's not its main purpose.

### The three different types of Select statements
```php
$df->select('colA', 'colB'): Select // Return Select
$df->selectAll(): SelectAll // With all columns, and keep the  selection in returned select object even if columns are aded or deleted to the dataframe.
$df->col('colA'): ColumnRepresentation // A classic select with extra methods to rename, remove, clone, type the selected column.
```

### Extract from a Select Statement

Return the result as a new DataFrame object:
```php
$newDf = $df->select('colA','colC')->whereColumn('colB', equal: 42)->export();
```

Or directly to an array:
```php
$newArr = $stmt->toArray();

// equivalent to (but slower)
$newArr = $stmt->export()->toArray();
```

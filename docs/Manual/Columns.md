
# Columns

## Add Column / Remove Column

Columns (attributes) are automatically created when a record contains them for the first time.
You can also create them manually at any time.

```php
$df->addColumn('a');
```

```php
$df->removeColumn('a');
$df->col('a')->remove(); // equivalent
```

## Getting column name/objects
```php
$df->columnsNames()
--------------
[
    [0] => a
    [1] => b
    [2] => c
]
```

```php
$df->columns()
--------------
[
    [0] => #ColumnRepresentation Object
    [1] => #ColumnRepresentation Object
    [2] => #ColumnRepresentation Object
]
```

```php
$df->hasColumn('a'); // true / false
$df->mustHaveColumn('a')->selectAll()... // Throw MammothPHP\WoollyM\Exceptions\InvalidSelectException or return $df
``

```php
$column = $df->col('a'); // return ColumnRepresentation object
$column->name; // 'a'
```

## Rename Column
```php
$col = $df->col('colName')->rename('newName');

$col->name; // 'newName'
$col->getName(); // 'newName'
```

## Get column as DataFrame
```php
$newDf = $df->col('colName')->import();
```
---
outline: deep
---

# Logic and Philosophy

Accessing data or modifying it, use an Sql inspired syntax using the keyword `select()`, `insert()`, `update()`, `delete()` as a prefix to corresponding methods.

## Basics select / insert / update / delete examples
```php
$df->select()->record(key: 42); // Return the record array

$df->insert()->record($recordArray); // Return $df (self)
$df->insert()->append($iterable); // Return $df (self)

$df->update()->record(key: 42, $recordArray); // Return $df (self)

$df->delete()->record(key: 42); // Return $df (self)
```

## Build a statement
`select()`, `update()`, `delete()` support constructors of powerful statements, inspired from SQL logic.

#### Statements basic usage examples
```php
$stmt = $df->select('colNameA')->whereColumn('colB', equal: 42); // Return a new Select statement object
$stmt->toArray();

$stmt = $df->update('colNameA')->whereColumn('colB', equal: 42); // Return a new Select statement object
$stmt->set(8); // Apply value '8' to column named 'colNameA' where column B equal to 42

$df->delete()->whereColumn('colA', 'foo')->execute(); // Return $df
```

### Filter & Limit the Select statements
Create a statement containing 2 two columns, where columnB is > 42, limit to 100 rows but start à offset 10.

```php
$stmt = $df->select('column1','colum2')
    ->where(fn($record, $recordKey) => $record['columnB'] > 42)
    ->limit(100)
    ->offset(10);
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
$stmt = $df->selectAll()->whereColumn('colA', 42);
$stmt = $df->selectAll()->whereKeyBetween(1, 42);
```


### Statements are Traversable
```php
foreach($df->selectAll()->where(fn($r) => $r) as $recordKey => $recordArray) {
    // ...
}
```

### Reset a statement

#### Reset columns selection
```php
$stmt = $df->select('colA');

$stmt->resetSelect();
$stmt->select('colB');
```

Or directly:

```php
$stmt->replaceSelect('colB');
```

#### Reset where clauses & limit
```php
$stmt = $df->select('colA')->where(...)->limit(20)->offset(7);

$stmt->resetWhere();
$stmt->resetLimit();
$stmt->resetOffset();
```

#### Reset everything
Reset directly selection, where clauses, limit and offset.

```php
$stmt = $df->select('colA')->where(...)->limit(20)->offset(7);

$stmt->reset();
```


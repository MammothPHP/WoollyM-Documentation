# Logic and Philosophy

Accessing data or modifying it, use an Sql inspired syntax using the keyword `select()`, `insert()`, `update()`, `delete()`, `extract()` as a prefix to corresponding methods.

```php
$df->select('colNameA')->whereColumnEqual('colB', 42); // Return a new Select statement object
$df->insert()->append($iterable); // Return $df (self)
$df->update()->record(key: 42, $recordArray); // Return $df (self)
$df->delete()->whereColumnEqual('colA', 'foo')->execute(); // Return $df (self)

$df->extract()->unique(onColumns: 'colA'); // Return a new DataFrame contaning unique value from column A
```
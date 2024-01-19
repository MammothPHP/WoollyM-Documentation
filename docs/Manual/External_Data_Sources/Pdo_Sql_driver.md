# PDO Sql Driver

```php
$tableName = 'testTable';
$primaryKey = 'id';

$pdo = new PDO('sqlite::memory:');
$pdo->exec("CREATE TABLE  {$tableName}  ({$primaryKey} INTEGER PRIMARY KEY, a TEXT, b TEXT, c TEXT);");

$PdoDriver = new PdoSql(db: $pdo, table: $tableName, keyColumn: $primaryKey);

$df = new DataFrame(dataDriver: $PdoDriver);
```
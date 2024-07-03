# The Dataframe object

## Counting Records
Counting records:
```php
count($df);
$df->count(); // equivalent
```

## Iterating over records
```php
foreach ($df as $key => $record) {
   echo $key.': '.implode('-', $record->toArray()).PHP_EOL;
}
--------------------------
0: 1-2-3
1: 4-5-6
2: 7-8-9

// A records as array (instead Record object) iterator is also availabe
foreach ($df->getRecordAsArrayIterator() as $key => $record) {
   echo $key.': '.implode('-', $record).PHP_EOL;
}
--------------------------
0: 1-2-3
1: 4-5-6
2: 7-8-9
```
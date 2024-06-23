# Sorting
_Sorting can be incompatible with some drivers. And some of them could be accelerated by some compatible drivers._

## sortRecordsByColumns
Sort record ascending / descing by column(s).
```php
$df->sortRecordsByColumns(by: 'colA', ascending: true);
$df->sortRecordsByColumns(by: ['colA', 'colB'], ascending: true); // By colA then colB
```

## sortColumn
Rearranges the order of columns by column name. Takes as argument a Clusure that functions identically to the native PHP uasort() api.
If no callback has been supplied, then it's will arrange it using alphabetics order.

```php
    $df->sortColumns(fn(string $a, string $b): int => $a <=> $b);
```
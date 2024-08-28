# Sorting
_Sorting can be incompatible with some drivers. And some of them could be accelerated by some compatible drivers._

## Order by records
Sort record ascending / descing by column(s).
```php
$df->orderBy('colA'); // implicit ascending order
$df->OrderBy(Desc::col('colA'), Asc::('colB')); // By colA descending then colB ascending
```

## sortColumn
Rearranges the order of columns by column name. Takes as argument a Clusure that functions identically to the native PHP uasort() api.
If no callback has been supplied, then it's will arrange it using alphabetics order.

```php
    $df->sortColumns(fn(string $a, string $b): int => $a <=> $b);
```
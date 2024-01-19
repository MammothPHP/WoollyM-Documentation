# Types Data
> [!WARNING]
> Type's system is unsatisfactory and will certainly be totally rethought in the future.

Two ways:
1. Converts pre-existing data once only 
2. Converts pre-existing data and forces the type of future data
   1. And force the future data to be typed since submission
   2. Or silently convert untyped future data

## Convert data to a type (one shot)
```php
$df->col('a')->type(DataType::INT);
```

## Keep an active conversion for a column

### Set it
```php
$df->col('a')->enforceType(DataType::INT);
```

### Remove it
```php
$df->col('a')->enforceType(null); # Note that data already converted, only the following additions we be concerned.
```
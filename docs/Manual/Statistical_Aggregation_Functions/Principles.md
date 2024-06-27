# Principles

## Functions availables
* [Natives functions](Natives_Functions)
* [User functions](User_Functions)

## Functions on Select Statement
```php
$df->select('colA')->whereColumnEqual('colB', 'foo')->sum();
```

## Aggregation with a Group by
```php
$df->groupBy('city', Sum::col('population', as: 'totalPopulation'));
$df->selectAll()->whereColumnEqual('city', 'Paris')->groupBy('district', Sum::col('population', as: 'totalPopulation'));
```
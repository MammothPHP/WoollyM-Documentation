# Group By

# From the groupBy core functionality

```php
$groupedDf = $df->groupBy(string|AggInterface ...$columns);
# Is strictly equivalent to
$groupedDf = $df->extract()->groupBy(string|AggInterface ...$columns);
```

It's return a new dataFrame.
```php
$df->groupBy('city', 'district', Sum::col('population', as: 'totalPopulation'));
```

# From a select statement

```php
$groupedDf = $df->selectAll()
                ->whereColumn('country', equal: 'FR')
                ->groupBy(  'city',
                            'district',
                            Sum::col('population', as: 'totalPopulation')
                );
```
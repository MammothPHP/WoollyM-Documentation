# Data Type

### General principles

A `property` can handle any PHP data type, including boolean, objects or array.
Wooly is primarly designed to handle string and numeric types. And this makes even more sense in the way aggregations and calculations are designed.

### Managing NULL values and their ambiguity
Managing the NULL type is never a trivial matter in any programming language. All the same as in SQL.
WoollyM proposes the following solution.

_These functionalities may be limited or change depending on the implementation of the driver used in the backend. However, this is the default driver (ArrayDriver) and is recommended for third-party drivers._

#### Show all column
```php
// Boucourechliev is an apatrid, and you never set the Nationality property for him. Not even by setting it to NULL.
$df = DataFrame::fromArray([
  ['composer' => 'Debussy', 'Nationality' => 'french'],
  ['composer' => 'Boucourechliev'],
]);

$df->toArray();
= [
  ['composer' => 'Debussy', 'Nationality' => 'french'],
  ['composer' => 'Boucourechliev'],
]

$df->toArray(fillInNonExistentCol: true);
= [
  ['composer' => 'Debussy', 'Nationality' => 'french'],
  ['composer' => 'Boucourechliev', 'Nationality' => null],
]
```

#### Check is a specific record has column
```php
// You specify an explicit null value
$df = DataFrame::fromArray([
  ['composer' => 'Debussy', 'Nationality' => 'french'],
  ['composer' => 'Stravinsky', 'Nationality' => null],
  ['composer' => 'Boucourechliev'],
]);

$df->getRecord(key: 0)->hasColumn('Nationality');
= true

$df->getRecord(key: 1)->hasColumn('Nationality');
= true

$df->getRecord(key: 2)->hasColumn('Nationality');
= false

$df->getRecord(key: 2)->toArray();
= ['composer' => 'Boucourechliev'],

$df->getRecord(key: 2)->toContextualArray();
= ['composer' => 'Boucourechliev', 'Nationality' => null],
```

### Datetime datatype
>[!WARNING]
> WoollyM plan to support specials filters and aggregation for date values. But that is no ready yet.

### Force & Convert to type
> Have a look to [Type System](/Manual/Typing)


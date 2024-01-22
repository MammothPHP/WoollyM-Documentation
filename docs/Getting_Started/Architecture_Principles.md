# Architecture principles

- Woolly is extendable, or at least he was trying to get used to the idea.
- Data are stored in `data-drivers` that are modules. Currently Woolly offer 2 natives drivers _(the default PhpArray and PdoSql)_ but you can create your own _(without fork)_. Drivers can limit some functionnality but they don't change the public API.
- Statements aggregate function _(like sum, count, max...)_ are modules, most current as offer natively, but you can had your own _(without fork)_
- `Builder` API is used to to create or export a DataFrame from an external sources _(file, database, string...)_ This results in things like  `$df = XLSX::fromFile($path)->import()`.
  - To keep the API as cute as possible for the most common cases, this is different for import/export with an `Array` (or `Traversable`).
  - Builder are simple (and optimized) wrapper on top of DataFrame. You can create your own builder _(using the asbtract class `Builder` or not)_.
  - Builders should not be confused with `data-drivers`, as the associated methods are always distinct. For example, the PDO Builder will not create a DataFrame using the PdoSql driver to browse or modify the underlying database. In this case, you need to specify the DataFrame object (using the needed driver) in wich to import.
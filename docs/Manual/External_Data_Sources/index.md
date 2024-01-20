# Use Data Driver to explore external sources or to overcome technical limitations on major datasets
::: warning
Non-default data drivers are still highly experimental and unfinished. The drivers interface and API will also be modified.
:::

## Natively provided drivers
|Driver|Comment|Memory Usage|Perf. (write access)|Perf. (random access)|Perf. (mass read)|Aggregate Functions
|---|---|---|---|---|---|---
| PhpArray | The default driver | Maximal, all the data stay in ram memory. PHP opy-on-write capacity are limited in context | Very Fast | Very Fast | Vert Fast | Very Fast | Moderately slow, some of them can cause huge memory usage (unique value...)
| [PdoSql](Pdo_Sql_driver) | _(Experimental)_ Interacting with a database with any PHP PDO driver available | Very low, theoritically infinite | Slow | Very Slow | Medium | Slow (some function can be further optimized)
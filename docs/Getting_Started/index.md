# Presentation

>[!CAUTION]
>This project is currently at an experimental stage. Production use is not recommended. APIs and functionalities are subject to change at any time without notice. Documentation is still deficient. Help and feedback are most welcome.

WoollyM is a PHP library for data analysis. It can be used to represent tabular data from various sources (CSV, database, JSON, Excel...). The unified API can then be used easily to browse, analyze, modify, and export data in a variety of formats, we try to provide a very playful, modern, expressive, and user-friendly interface. This API is also modular and extensible, so you can easily add your own calculation and exploration methods.

Performances are optimized to be as light as possible on RAM during operations (input, output, read, write, stats, copy, clone), this is done using - internally - complex iterators and optimization preferring RAM over speed (even if we try to be fast also). The storage engine uses a modular storage system, if the default PhpArray driver uses RAM, the use of a database driver (such as the PDO driver) theoretically allows you to work on extremely large datasets. Using appropriate drivers, you can also write - for example - directly to the database (add, update) using the Woolly API.
# Data vocabulary & principles

- A `Record` is similar to a line in a spreadsheet.
    - A `Record` can contain from none _(empty record)_ to several `Columns`.
    - The default behavior of API is to return no entry for non-existent columns in the `Record`. But options allow you to virtually return a NULL value if necessary.
    - Each record has a unique key. Generated on the Woolly side _(more specifically by the data-driver used)_. Currently only integer are supported. The default driver (PhpArray) index key from 0.
    - Each record `Column` (property) contain a value. Can be of any PHP type (including `null`) on the default data-driver, others drivers can limit types of silently convert it.
- A `Column` represents a property common to several records, and is similar to a column in a spreadsheet.
  - `Columns` can be added manually or dynamically (a new `Record` can contains a new column) at any time.
  - `Columns` are represented to the user by case-sensitive string names.
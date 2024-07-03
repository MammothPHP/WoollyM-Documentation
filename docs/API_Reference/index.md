
***

# WoollyM - API reference



This is an automatically generated documentation for **WoollyM - API reference**.


## Namespaces


### \MammothPHP\WoollyM

#### Classes

| Class | Description |
|-------|-------------|
| [`DataFrame`](./classes/MammothPHP/WoollyM/DataFrame.md) | |
| [`DataFrameAccessors`](./classes/MammothPHP/WoollyM/DataFrameAccessors.md) | |
| [`DataFrameHelpers`](./classes/MammothPHP/WoollyM/DataFrameHelpers.md) | |
| [`DataFrameModifiers`](./classes/MammothPHP/WoollyM/DataFrameModifiers.md) | |
| [`DataFramePrimitives`](./classes/MammothPHP/WoollyM/DataFramePrimitives.md) | |
| [`DataFrameStatements`](./classes/MammothPHP/WoollyM/DataFrameStatements.md) | |
| [`Extract`](./classes/MammothPHP/WoollyM/Extract.md) | |
| [`Record`](./classes/MammothPHP/WoollyM/Record.md) | |


#### Traits

| Trait | Description |
|-------|-------------|
| [`LinkedDataFrame`](./classes/MammothPHP/WoollyM/LinkedDataFrame.md) | |




### \MammothPHP\WoollyM\DataDrivers




#### Interfaces

| Interface | Description |
|-----------|-------------|
| [`DataDriverInterface`](./classes/MammothPHP/WoollyM/DataDrivers/DataDriverInterface.md) | |
| [`SortableDriverInterface`](./classes/MammothPHP/WoollyM/DataDrivers/SortableDriverInterface.md) | |



### \MammothPHP\WoollyM\DataDrivers\DriversExceptions

#### Classes

| Class | Description |
|-------|-------------|
| [`InvalidDriverClassException`](./classes/MammothPHP/WoollyM/DataDrivers/DriversExceptions/InvalidDriverClassException.md) | |
| [`KeyNotExistException`](./classes/MammothPHP/WoollyM/DataDrivers/DriversExceptions/KeyNotExistException.md) | |
| [`SortNotSupportedByDriverException`](./classes/MammothPHP/WoollyM/DataDrivers/DriversExceptions/SortNotSupportedByDriverException.md) | |




### \MammothPHP\WoollyM\Exceptions

#### Classes

| Class | Description |
|-------|-------------|
| [`DataFrameException`](./classes/MammothPHP/WoollyM/Exceptions/DataFrameException.md) | |
| [`FeatureNotImplementedYet`](./classes/MammothPHP/WoollyM/Exceptions/FeatureNotImplementedYet.md) | |
| [`FileExistsException`](./classes/MammothPHP/WoollyM/Exceptions/FileExistsException.md) | |
| [`InvalidSelectException`](./classes/MammothPHP/WoollyM/Exceptions/InvalidSelectException.md) | |
| [`NotModifiedRecord`](./classes/MammothPHP/WoollyM/Exceptions/NotModifiedRecord.md) | |
| [`NotYetImplementedException`](./classes/MammothPHP/WoollyM/Exceptions/NotYetImplementedException.md) | |
| [`PropertyNotExistException`](./classes/MammothPHP/WoollyM/Exceptions/PropertyNotExistException.md) | |
| [`SourceDataFrameNoLongerExist`](./classes/MammothPHP/WoollyM/Exceptions/SourceDataFrameNoLongerExist.md) | |
| [`UnavailableMethodInContext`](./classes/MammothPHP/WoollyM/Exceptions/UnavailableMethodInContext.md) | |
| [`UnknownOptionException`](./classes/MammothPHP/WoollyM/Exceptions/UnknownOptionException.md) | |




### \MammothPHP\WoollyM\IO

#### Classes

| Class | Description |
|-------|-------------|
| [`Builder`](./classes/MammothPHP/WoollyM/IO/Builder.md) | |
| [`CSV`](./classes/MammothPHP/WoollyM/IO/CSV.md) | |
| [`FWF`](./classes/MammothPHP/WoollyM/IO/FWF.md) | |
| [`HTML`](./classes/MammothPHP/WoollyM/IO/HTML.md) | |
| [`JSON`](./classes/MammothPHP/WoollyM/IO/JSON.md) | |
| [`ODS`](./classes/MammothPHP/WoollyM/IO/ODS.md) | |
| [`SQL`](./classes/MammothPHP/WoollyM/IO/SQL.md) | |
| [`TSV`](./classes/MammothPHP/WoollyM/IO/TSV.md) | |
| [`XLSX`](./classes/MammothPHP/WoollyM/IO/XLSX.md) | |


#### Traits

| Trait | Description |
|-------|-------------|
| [`BuilderExport`](./classes/MammothPHP/WoollyM/IO/BuilderExport.md) | |




### \MammothPHP\WoollyM\Statements\Delete

#### Classes

| Class | Description |
|-------|-------------|
| [`Delete`](./classes/MammothPHP/WoollyM/Statements/Delete/Delete.md) | |




### \MammothPHP\WoollyM\Statements\Insert

#### Classes

| Class | Description |
|-------|-------------|
| [`Insert`](./classes/MammothPHP/WoollyM/Statements/Insert/Insert.md) | |




### \MammothPHP\WoollyM\Statements\Select

#### Classes

| Class | Description |
|-------|-------------|
| [`ColumnRepresentation`](./classes/MammothPHP/WoollyM/Statements/Select/ColumnRepresentation.md) | A special Select object restricted to a single column, implementing extra columns manipulation methods.|
| [`FixedSelect`](./classes/MammothPHP/WoollyM/Statements/Select/FixedSelect.md) | |
| [`Select`](./classes/MammothPHP/WoollyM/Statements/Select/Select.md) | |
| [`SelectAll`](./classes/MammothPHP/WoollyM/Statements/Select/SelectAll.md) | |




### \MammothPHP\WoollyM\Statements\Update

#### Classes

| Class | Description |
|-------|-------------|
| [`Update`](./classes/MammothPHP/WoollyM/Statements/Update/Update.md) | |




### \MammothPHP\WoollyM\Stats

#### Classes

| Class | Description |
|-------|-------------|
| [`AggProvider`](./classes/MammothPHP/WoollyM/Stats/AggProvider.md) | |
| [`Modules`](./classes/MammothPHP/WoollyM/Stats/Modules.md) | |


#### Traits

| Trait | Description |
|-------|-------------|
| [`AggGroup`](./classes/MammothPHP/WoollyM/Stats/AggGroup.md) | |



#### Interfaces

| Interface | Description |
|-----------|-------------|
| [`AggInterface`](./classes/MammothPHP/WoollyM/Stats/AggInterface.md) | |
| [`StatsInterface`](./classes/MammothPHP/WoollyM/Stats/StatsInterface.md) | |
| [`StatsMethodInterface`](./classes/MammothPHP/WoollyM/Stats/StatsMethodInterface.md) | |
| [`StatsPropertyInterface`](./classes/MammothPHP/WoollyM/Stats/StatsPropertyInterface.md) | |



### \MammothPHP\WoollyM\Stats\Modules

#### Classes

| Class | Description |
|-------|-------------|
| [`AbstractAgg`](./classes/MammothPHP/WoollyM/Stats/Modules/AbstractAgg.md) | |
| [`AbstractMinMaxMax`](./classes/MammothPHP/WoollyM/Stats/Modules/AbstractMinMaxMax.md) | |
| [`Average`](./classes/MammothPHP/WoollyM/Stats/Modules/Average.md) | |
| [`CountDistinctValues`](./classes/MammothPHP/WoollyM/Stats/Modules/CountDistinctValues.md) | |
| [`Describe`](./classes/MammothPHP/WoollyM/Stats/Modules/Describe.md) | |
| [`Max`](./classes/MammothPHP/WoollyM/Stats/Modules/Max.md) | |
| [`Mean`](./classes/MammothPHP/WoollyM/Stats/Modules/Mean.md) | |
| [`Min`](./classes/MammothPHP/WoollyM/Stats/Modules/Min.md) | |
| [`Size`](./classes/MammothPHP/WoollyM/Stats/Modules/Size.md) | |
| [`Sum`](./classes/MammothPHP/WoollyM/Stats/Modules/Sum.md) | |




***
> Automatically generated on 2024-07-03

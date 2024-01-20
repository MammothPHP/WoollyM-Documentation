### Import or export from/to an external source
_To limit external dependencies, some modules could require a separate `composer require`. Please consult the instructions for each of the needed modules.__ 

| Module | Import | Export | Performances & Limit
| --- | --- | --- | ---
| [CSV/TSV](CSV.md) | :heavy_check_mark: | :heavy_check_mark: | _Memory and performance optimized. It's a wrapper on top of [league/csv](https://csv.thephpleague.com/)_
| [FWF](FWF.md) | :heavy_check_mark: | :x: | _Limited_
| [JSON](JSON.md) | :heavy_check_mark: | :heavy_check_mark: | _Memory and performance optimized on import only, it's a wrapper on top of [halaxa/json-machine](https://github.com/halaxa/json-machine). Can be limited on export (PHP native Json)_
| [XLSX Spreadsheet](XLSX.md) | :heavy_check_mark: | :heavy_check_mark: | _Optimized wrapper on top of [phpoffice/phpspreadsheet](https://github.com/PHPOffice/PhpSpreadsheet)._ _It may also potentially be able to load older Excel formats by automatically detecting them; but this behavior is untested._
| [ODF Spreadsheet](XLSX.md) | :heavy_check_mark: | :heavy_check_mark: | _Optimized wrapper on top of [phpoffice/phpspreadsheet](https://github.com/PHPOffice/PhpSpreadsheet)_
| [HTML Table](HtmlTable.md) | :x: | :heavy_check_mark: | _Limited_
| [PDO SQL](PDOSql.md) | :heavy_check_mark: | :heavy_check_mark: | _Optimized_
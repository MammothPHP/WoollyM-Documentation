# Create custom aggregation functions

Example with a basic size function counting each field in records from a statement.

```php
use MammothPHP\WoollyM\DataFrame;
use MammothPHP\WoollyM\Stats\Modules;
use MammothPHP\WoollyM\Statements\Select\Select;
use MammothPHP\WoollyM\Stats\{StatsMethodInterface, StatsPropertyInterface};

Modules::registerModule(
    new class implements StatsMethodInterface, StatsPropertyInterface
    {
        public const string NAME = 'size';

        public function executeProperty(Select $select): int
        {
            return $this->execute($select);
        }

        public function executeMethod(Select $select, array $arguments): int
        {
            return $this->execute($select, ...$arguments);
        }

        protected function execute(Select $select): int
        {
            $r = 0;

            foreach ($select as $record) {
                $r += count($record);
            }

            return $r;
        }
    }
);


// Use it!

$df = new DataFrame([
    ['colA' => 42, 'colB' => 7 , 'colC' => 8],
    ['colA' => 77, 'colB' => 7 , 'colC' => 42],
    ['colA' => 77, 'colB' => 7 , 'colC' => 8],
    ['colA' => 42, 'colB' => 7 , 'colC' => 42],
    ['colA' => 77, 'colB' => 7 , 'colC' => 8],
]);

$df->select('colA', 'colC')->whereColumn('colA', equal: 42)->size(); // 2
```

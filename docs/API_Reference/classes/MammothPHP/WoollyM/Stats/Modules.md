***

# Modules





* Full name: `\MammothPHP\WoollyM\Stats\Modules`
* This class is an **Abstract class**



## Properties


### modules



```php
protected static ?array $modules
```



* This property is **static**.


***

## Methods


### init



```php
protected static init(): void
```



* This method is **static**.








***

### getModule



```php
protected static getModule(string $name, \MammothPHP\WoollyM\Stats\ModuleType $type): ?\MammothPHP\WoollyM\Stats\StatsInterface
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$name` | **string** |  |
| `$type` | **\MammothPHP\WoollyM\Stats\ModuleType** |  |





***

### registerModule



```php
public static registerModule(\MammothPHP\WoollyM\Stats\StatsInterface $module): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$module` | **\MammothPHP\WoollyM\Stats\StatsInterface** |  |





***

### removeModuleByMethod



```php
public static removeModuleByMethod(string $method): void
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$method` | **string** |  |





***


***
> Automatically generated on 2024-04-24

Initiated separated documentation for WoollyM project.

## Run DEV server
```shell
npm run docs:dev
```

## Auto generated API references

From WoolyM directory
```shell
php phpDocumentor.phar --directory=src --target={path_to}/WollyM-Documentation/docs/API_Reference
```

```shell
rm docs/API_Reference/index.md && mv docs/API_Reference/Home.md docs/API_Reference/index.md
```
# Open street map API

This application  exposes a route to get “GeoJSON features” of a location given with a geolocation box (bounding box) as input (https://wiki.openstreetmap.org/wiki/Bounding_Box). 
This repository contains only one module and API end point.

## Installation

```bash
$ npm install
```
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## Swagger
Swagger is available on `route {{API_HOST}}/docs`.
Postman collection to import is available under `${{API_HOST}}/docs-json`

## Environment variables
```bash
make a .env file in the root directory and place the below value

OPEN_STREET_API_URL=https://www.openstreetmap.org/api/0.6/map
```

## Running the app

After configuring environment variables (in .env file) run following commands

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



# express-api-structure

scalable express api structure

## Installation

- clone this repository
- run `npm install` or `npm i`
- run `npm run dev-linux` to start the development server for linux users
- run `npm run dev-windows` to start the development server for windows users

## Notes:

- **middlewares folder is only for custom middlewares**
- **model name must be singler**
- **please use `jest` for unit testing**
- **for integration testing use `supertest` to send http requests**

### run in production mode

```
$ npm run production
```

## Development Configurations

| Properties   | Default                                                                                    | Types    | Explain                                                          |
| ------------ | ------------------------------------------------------------------------------------------ | -------- | ---------------------------------------------------------------- |
| port         | 8001 or 8000                                                                               | `Number` | server port                                                      |
| db           | `{ url: 'mongodb://localhost/playground', useNewUrlParser: true, useFindAndModify: true }` | `object` | database configs                                                 |
| logger       | `{ active: true, level: "dev" }`                                                           | `object` | logger package: `morgan`                                         |
| static       | `public`                                                                                   | `String` | static folder name to serve static files `images, videos etc...` |
| jwtSecretKey | `superDoperSecretKey`                                                                      | `String` | json web token secret key                                        |

## Environment Variables

| name             | Types    |
| ---------------- | -------- |
| app_mongoUrl     | `String` |
| app_jwtSecretKey | `String` |
| DEBUG            | `String` |
| PORT             | `Number` |

## Debuggers

**debuggers are start with `app:<Namespace>`**

| Namespace | Explain           |
| --------- | ----------------- |
| db        | database debugger |
| server    | server debugger   |
| i18n      | locale debugger   |
| \*        | debug all         |

**to activate debugger run**

- linux:

```
export DEBUG=app:<namespace>
```

- windows:

```
set DEBUG=app:<namespace>
```

## Localization section

**to add a locale edit the `locales` property in `config/<environment>`**

## Localization Options

| Option     | Note                                             |
| ---------- | ------------------------------------------------ |
| activate   | activates the module                             |
| locales    | available languages                              |
| default    | default language                                 |
| cookieName | cookie name if you want to store the user locale |
| query      | query string to change the current locale        |
| folderName | locale folder name                               |

## Default config

| Option     | value            |
| ---------- | ---------------- |
| activate   | `true`           |
| locales    | `["ar", "en"]`   |
| default    | `"ar"`           |
| cookieName | `"lang"`         |
| query      | `"lang"`         |
| folderName | `"localization"` |

**note: after adding the locale don't forget to add `<locale>.json` to `localization` folder**

## The structure

```
|-- app.js // entry file

|-- config // all the configurations for different environments

|-- helpers // helper functions custom validation etc...

|-- middleware // custom middleware for specific routes

|-- localization // locale files

|-- models // database models goes here

|-- public // images, styles, etc...

|-- routes // all the routes defined there

|-- startup // the startup process here you can do something while running the server
            // default middlewares, connect to another database, winston, etc...

    |-- middleware // custom global middlewares

`-- tests //
    |-- integration // all the integration tests goes here
    |-- unit // all the unit tests and mock ups goes here
```

## Create Api Endpoint

1. go to `./routes/api/`
2. create new folder with the following structure:

```
|-- <resource_name> // like users
    |-- middleware // export middleware function
      ^-- index.js
      ^-- create.js
      ^-- update.js
      `-- delete.js
    |-- index.js // define your routes here [entry]
```

## Entry File structure

```
const { Router } = require("express");
const index = require("./api/resource/index"); // note: you can do "./api/resource/" which will point to index.js by default
                                               // this is just to clear the structure for you
const create = require("./api/resource/create");
const update = require("./api/resource/update");
const _delete = require("./api/resource/delete"); // don't forget delete is a keyword !

const router = Router();

router.get("/<resource>/", index)
      .post("/<resource>/", create)
      .put("/<resource>/:id", update)
      .delete("/<resource>/:id", _delete);

module.exports = router;
```

## route middleware structure

```
module.exports = async (req, res) => {
  // do something
};
```

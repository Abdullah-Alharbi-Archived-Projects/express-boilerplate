# express-api-structure

scalable express api structure

## Notes:

- **middlewares folder is only for custom middlewares**
- **model name must be singler**
- **please use `jest` for unit testing**
- **for integration testing use `supertest` to send http requests**

### run in production mode

```
$ npm run production
```

### run in development mode

```
$ npm run dev-[windows || linux]
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

## Localization section

\*\*to add a locale edit the `locales` property in `config/<environment>`

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

**note: after adding the locale you want don't forget to add `<locale>.json` to `localization` folder**

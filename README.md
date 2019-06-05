# express-api-structure
scalable express api structure

## Development Configurations
|Properties|Default|Types|Explain|
|--|--|--|--|
| port | 8001 or 8000 | `Number` | server port |
| db | `{ url: 'mongodb://localhost/playground', useNewUrlParser: true, useFindAndModify: true }` | `object` | database configs |
| logger | ` { active: true, level: "dev" } ` | `object` | logger package: `morgan` |
| static | `public` | `String` | static folder name to serve static files `images, videos etc...` |
| jwtSecretKey | `superDoperSecretKey` | `String` | json web token secret key |

## Environment Variables
|name|Types|
|--|--|
| app_mongoUrl | `String` |
| app_jwtSecretKey | `String` |
| DEBUG | `String` |

## Debuggers
**debuggers are start with `app:<Type>` **
|Type|Explain|
|--|--|
| db | database debugger |
| server | server debugger |

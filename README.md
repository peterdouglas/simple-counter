# Peter's Solution to the Sitepoint Front-End test


## Technologies used
- Yeoman generator for the base
- AngularJS
- Bootstrap
- Jasmine
- Karma
- bower
- grunt, livereload and various plugins for development, js and css minification, etc.


## Install and start the server
NOTE: If you are running this on windows, npm install of Karma can prove problematic - so I have included a test free version
```
$ npm install
$ npm start
$ npm run build #[optional] use for any precompilers you choose
```

## API endpoints / examples

> Endpoints - Note: The delete endpoint has been updated to receive data as a query string as AngularJS
> does not support sending data in the body as it is not RESTful.

```
GET /api/v1/counters
# []

POST {title: "bob"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0}
# ]

POST {title: "steve"} /api/v1/counter
# [
#   {id: "asdf", title: "bob", count: 0},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "asdf"} /api/v1/counter/inc
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: 0}
# ]

POST {id: "qwer"} /api/v1/counter/dec
# [
#   {id: "asdf", title: "bob", count: 1},
#   {id: "qwer", title: "steve", count: -1}
# ]

DELETE /api/v1/counter?id={id}
# [
#   {id: "asdf", title: "bob", count: 1}
# ]

GET /api/v1/counters
# [
#   {id: "asdf", title: "bob", count: 1},
# ]
```

> **NOTE:* Each request returns the current state of all counters.

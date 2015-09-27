# Simple Counter


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
$ npm run build # Full build that includes testing
$ npm run build:windows # Full build minus testing - to be run if you are running on windows and don't want to deal with trying to install karma

```


## Other notes
- For all glyph icons, I have hidden them from screen readers and added an screen ready only item describing it's function for accessibility
- These unit tests are only testing the 'happy path' and are not testing for any fails or errors ... this is something that would normally be done,
  but has been excluded as the Express server only returns successful responses at this point.
- the view has been optimized for both desktop and mobile.


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

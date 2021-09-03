const posts = require('../mock-data');
/**
 * The router object required for handling requests on different routes and methods.
 */
const router = require('express').Router();

/**
 * Middleware that intercepts EVERY incoming request.
 * Here we can see that the request handler is an anonymous function that takes three arguments:
 * 1. The Incoming Request Object
 * 2. The Response to be sent Object
 * 3. A next() function which passes the request to the next handler if called.
 */
router.use((req, res, next) => {
    console.log('INTERCEPTED');
    next()

})

/**
 * A GET request using URL params. URL params represent dynamic data which can be different for every request.
 * Regardless of the data sent as URL params, the same handler should be used.
 * Remember the : when trying to set something as a dynamic param.
 * Afterwards it will be available under req.params
 */
router.get('/posts/:sarma', (req, res, next) => {
    const params = req.params;
    res.status(200).json(params);
})

/**
 * A GET request that shows how to access the queryParams of a request.
 * The response object holds several functions and properties inside, the most important of which are:
 * The .status() function which sets the status of the response (2xx for success, 4xx for client error, 5xx for server error)
 * The .json() function which sends whatever was passed as an argument as the body of the response in a JSON format
 * Alternatively, instead of .json(), .send() can be used.
 */
router.get('/posts', (request, response, next) => {
    const params = request.query;
    console.log(params);
    response.status(200).json(posts)
})

//http://localhost:8080/books

router.get('/books', (request, response, next) => {
    response.status(200).json()
})

/**
 * Extracting the body of a request is imperative in POST and PUT requests.
 * The body parser middleware needs to be defined first!
 * Afterwards, the request body is available under req.body
 */
router.post('/posts', (req, res, next) => {
    const requestBody = req.body;
    console.log(requestBody);
    res.status(201).json('Something something.')
})

router.delete('/posts', (req, res, next) => {
    res.status(200).json('Deleted')
})

router.put('/posts', (req, res, next) => {
    res.status(200).json('PUT request executed');
})

/**
 * WILDCARD handler
 * What this means, any request that wasn't handled by the above handlers WILL be intercepted and handled by this one.
 * Typically used as a 404 handler.
 */
router.use('*', (req, res, next) => {
    res.status(404).json('Nisto od rabotata brate aj Germanija');
})

/**
 * UNREACHABLE DUE TO BEING WRITTEN AFTER WILDCARD.
 */
// router.delete('/dummy', (req, res, next) => {
//     res.status(200).json('Shouldn\'t reach ');
// })

module.exports = router;
const router = require('express').Router();
const { logOut, logIn } = require('../handlers/auth');
const  { validateUserIdInSession } = require('../middleware/session');
const { validateJWTHandler } = require('../middleware/jwt');

router.post('/api/v1/products', (req, res) => {});

// OLD ES5 Version with string concatenation
// router.get(process.env.API_PREFIX + '/products')

// ES6 String Literals
router.get(`${process.env.API_PREFIX}/products`, (req, res) => {
  return res.status(200).json('I am here');
});

router.post(process.env.API_PREFIX + '/login', logIn);
router.post(`${process.env.API_PREFIX}/logout`, validateJWTHandler,  logOut);

module.exports = router;

// localhost:3000 localhost:4200 127.0.0.1 0.0.0.0

// localhost:8080

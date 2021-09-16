const router = require('express').Router();
const { getAllMovies, addMovie, deleteMovie } = require('../handlers/movies');
const { logIn, register } = require('../handlers/users');
const { jwtInterceptor } = require('../middleware/jwt');
const { sendMail } = require('../handlers/mail');

const PREFIX = process.env.API_PREFIX;

router.get(`${PREFIX}/movies`, jwtInterceptor, getAllMovies);
router.post(`${PREFIX}/movies`, jwtInterceptor, addMovie);
router.delete(`${PREFIX}/movies/:id`, jwtInterceptor, deleteMovie);
router.post(`${PREFIX}/login`, logIn);
router.post(`${PREFIX}/register`, register);
router.post(`${PREFIX}/mail`, sendMail);
router.use('*', (req, res, next) => {
    return res.status(404).json('Not Found!');
})

module.exports = router;
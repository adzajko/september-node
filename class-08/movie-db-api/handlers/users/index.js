const User = require('../../pkg/User');
const bcrypt = require('bcrypt');
const { createJwt } = require('../../middleware/jwt');


const logIn = async (req, res, next) => {
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json('Invalid Login!');
    }

}

const register = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json('Cannot create user with provided credentials.');
    }

}

module.exports = {
    logIn, 
    register
}
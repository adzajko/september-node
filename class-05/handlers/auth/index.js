const { createToken } = require('../../middleware/jwt');

/**
 * Handler function for login requests.
 * Uses session, stores the user id in the session.
 * User id should be extracted from the request body.
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logIn = (req, res, next) => {
    const {username, password} = req.body;
    // const username = req.body.username;
    if ((!username || username !== 'xxx_vindizel_fastfurious_xxx') && (!password || password !== 'najjakio')) {
        return res.status(400).json('Missing or invalid credentials!')

        // bcrypt library to be used when decoding or encoding passwords.
        // bcrypt.decode bcrypt.compare
    }

    // req.session.userId = username;
    // console.log(req.session);
    // GUARDS
    const token = createToken(username)
    return res.status(200).json(token);
}

/**
 * Handler function for logging out users.
 * Requires an active session to work!
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const logOut = (req, res, next) => {
    req.session.destroy();
    res.status(200).json('Logged out!');
}

module.exports = {
    logIn, logOut
}

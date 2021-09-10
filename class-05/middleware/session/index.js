/**
 * Validate if session has active user or not
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const validateUserIdInSession = (req, res, next) => {
    if (!req.session || !req.session.userId) {
        return res.status(400).json('Inactive or invalid session.');
    }

    return next();

}

module.exports = {
    validateUserIdInSession
}
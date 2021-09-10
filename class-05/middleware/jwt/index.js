const jwt = require('jsonwebtoken');

/**
 * JWT decoder function
 * Accepts a JWT.
 * Return the decoded value.
 * @param {String} jwToken
 * @returns
 */
const jwtDecoder = jwToken => {
  return jwt.decode(jwToken);
};

/**
 * Create a JWT using the username as payload.
 * @param {String} payload
 */
const createToken = payload => {
  const newToken = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: '2h'
  });
  return newToken;
};

const tokenVerifier = token => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

/**
 * Middleware function that validates the jwt.
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const validateJWTHandler = (req, res, next) => {
  const authorization = req.headers.authorization;
  // Bearer JWT
  // console.log(authorization);
  if (!authorization) {
    return res.status(403).json('Missing JWT!');
  }

  // Equivalent to const requestJwt = authorization.split[' '][1]
  // const requestJwt = authorization.split(' ')[1]
  const [bearer, requestJwt] = authorization.split(' ');
  // console.log({ bearer });
  // console.log({ requestJwt });

  // if (!tokenVerifier(requestJwt)) {
  //     return res.status(401).json('Expired or invalid token!');
  // }

  // return next();

  try {
    tokenVerifier(requestJwt);
  } catch (error) {
    return res.status(401).json('Expired or invalid token!');
  }

  return next();
};

module.exports = {
  tokenVerifier,
  createToken,
  jwtDecoder,
  validateJWTHandler
};

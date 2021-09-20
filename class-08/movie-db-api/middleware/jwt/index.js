const jwt = require('jsonwebtoken');

const createJwt = user => {
  return jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: '5h'
  });
};

const verifyJwt = token => {
  return jwt.verify(token, process.env.JWT_SECRET);
};

const decodeToken = token => {
  return jwt.decode(token);
};

const jwtInterceptor = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return res.status(400).json('Missing header!');
  }

  const [, token] = authorization.split(' ');

  try {
    verifyJwt(token);
  } catch (error) {
    return res.status(401).json('Invalid token!');
  }

  return next();
};

module.exports = {
  createJwt,
  verifyJwt,
  decodeToken,
  jwtInterceptor
};

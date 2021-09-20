const User = require('../../pkg/User');
const bcrypt = require('bcrypt');
const { createJwt } = require('../../middleware/jwt');

const logIn = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json('Invalid Login!');
  }

  try {
    /**
     * First, check if an user with the username from the request body is present in the db.
     */
    const user = await User.findOne({ username: username });
    try {
      /**
       * Use the built-in function of bcrypt to compare a decoded string and an encoded string.
       */
      await bcrypt.compare(password, user.password);
      /**
       * If the comparison is correct, create a new JWT using the username as paylad.
       */
      const newJwt = createJwt(username);
      return res.status(200).json(newJwt);
    } catch (error) {
      return res.status(401).json('Wrong Password.');
    }
  } catch (error) {
    return res.status(403).json('Username not found!');
  }
};

const register = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json('Cannot create user with provided credentials.');
  }

  try {
    /**
     * Check to see if username is already taken.
     */
    const user = User.find({ username: username });
    if (user.length > 0) {
      return res.status(409).json('Username already exists!');
    }

    /**
     * Built-in function of bcrypt that encodes a string and returns a Promise of the encoded value.
     */
    const encryptedPassword = await bcrypt.hash(password, 10);
    /**
     * Always remember to encode passwords before inserting them into DB.
     */
    await User.create({ username, password: encryptedPassword });
    return res.status(201).json('User created!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  logIn,
  register
};

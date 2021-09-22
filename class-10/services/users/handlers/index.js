const bcrypt = require('bcrypt');
const User = require('../../../core/users');
const { Request, Response, NextFunction } = require('express');

/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/**
 * Handler function for adding new User.
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
const addNewUser = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json('Missing user info');
  }

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: encryptedPassword });
    return res.status(201).json('User created!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  addNewUser
};

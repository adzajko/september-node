const { sendMailModel } = require('../../pkg/mailer');

/**
 * Handler function for sending mail.
 * Should accept an email, name & message object from the request body.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {*} next
 * @returns
 */
const sendMail = async (req, res, next) => {
  const { email, name, message } = req.body;
  if (!email || !name || !message) {
    return res.status(400).json('Invalid email!');
  }

  try {
    await sendMailModel(req.body);
    return res.status(200).json('Mail sent!');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  sendMail
};

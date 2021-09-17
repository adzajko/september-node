const nodemailer = require('nodemailer');

const sendMailModel = async mailBody => {
  /**
   * Node Mailer requires a transport to work.
   * A transport is a definition of a mail service, can be outlook / gmail ...
   * the auth part is the credentials of YOUR email.
   * Some email services will ask for more authentication. (Gmail especially.)
   */
  const transport = nodemailer.createTransport({
    service: 'outlook',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  /**
   * The mail options object contains at least 4 options.
   * the from and to options should be your user. (Fastest workaround for credentials)
   * subject and text are up to you :)
   */
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: process.env.MAIL_USER,
    subject: `Message from ${mailBody.email}`,
    text: `${mailBody.name}: \n ${mailBody.message}`
  };

  /**
   * Once the mailer configuration is complete, just use the .sendMail function with the above options as an argument.
   */
  await transport.sendMail(mailOptions);
};

module.exports = {
  sendMailModel
};

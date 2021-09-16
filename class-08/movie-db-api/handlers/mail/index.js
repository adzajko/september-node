const { sendMail } = require('../../pkg/mailer');

exports.sendMail = async (req, res, next) => {
    const { email, name, message } = req.body;
    if (!email || !name || !message) {
        return res.status(400).json('Invalid email!');
    }

    try {
        await sendMail(req.body);
        return res.status(200).json('Mail sent!');
    } catch (error) {
        return res.status(500).json(error);
    }
}
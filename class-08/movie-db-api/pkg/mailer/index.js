const nodemailer = require('nodemailer');

const sendMail = async (mailBody) => {
    const transport = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: `Message from ${mailBody.email}`,
        text: `${mailBody.name}: \n ${mailBody.message}`
    }

    await transport.sendMail(mailOptions);
}

module.exports = {
    sendMail
}
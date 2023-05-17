const nodemailer = require('nodemailer');
require("dotenv").config();
const { nanoid } = require("nanoid");

const { META_PASSWORD, BASE_URL } = process.env;
const verificationToken = nanoid();

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 456,
    secure: true,
    auth: {
        user: 'marinauser@meta.ua',
        pass: META_PASSWORD
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const verifyEmail = {
    to: 'email',
    from: 'marinauser@meta.ua',
    subject: 'Verify email',
    html: `<a style="font-size:16px" target="_blank" href="${BASE_URL}/api/auth/verify/${verificationToken}">Click to verify your email</a>`,
};

const sendEmail = async (email, verificationToken) => {
    await transport.sendMail(verifyEmail)
        .then(() => console.log("Email send success"))
        .catch(error => console.log(error.message))
}

module.exports = sendEmail;

const { ctrlWrapper } = require("../../helpers");

const { User } = require("../../models");

const sendEmail = require("./sendEmail");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
    sendEmail,
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
    
}
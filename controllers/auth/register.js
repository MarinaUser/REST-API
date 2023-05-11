const bcrypt = require("bcrypt");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { User } = require("../../models");
const { HttpError, sendEmail } = require("../../helpers");

const register = async (req, res) => {
    const { email, password, subscription } = req.body;

    const user = await User.findOne({ email });
    if (user) {
        throw HttpError(409, "Email in use'");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const verificationToken = nanoid();

    const newUser = await User.create({ ...req.body, password: hashPassword, avatarURL, verificationToken });

    await sendEmail(email, verificationToken);

    res.status(201).json({ email: newUser.email, subscription: newUser.subscription });
}

module.exports = register;
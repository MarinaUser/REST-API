const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");
const { jimpModifyImage } = require("../../helpers");


const avatarsDir = path.join(__dirname, "../", "../", "public", "avatars");

const updateAvatar = async (req, res) => {
	const { _id } = req.user;
	const { path: tempUpload, originalname } = req.file;

	const fileName = `${_id}_${originalname}`;
	const resultUpload = path.join(avatarsDir, fileName);

	await jimpModifyImage(tempUpload);

    // await fs.rename(tempUpload, resultUpload); 
    await fs.copyFile(tempUpload, resultUpload);

	const avatarURL = path.join("avatars", fileName);
	await User.findByIdAndUpdate(_id, { avatarURL });
	res.json({
		avatarURL,
	});
};

module.exports = updateAvatar;
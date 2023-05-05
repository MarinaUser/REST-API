const Jimp = require("jimp");
const { HttpError } = require('./HttpError');

const jimpModifyImage = async filePath => {
    await Jimp.read(filePath)
        .then(image => {
            return image
                .cover(250, 250)
                .write(filePath);
        })
    .catch(err => {
			console.log(err);
			throw HttpError(404, err.message);
		});
};
module.exports = jimpModifyImage;


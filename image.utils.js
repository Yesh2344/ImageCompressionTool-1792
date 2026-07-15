const sharp = require('sharp');

const compressImage = async (image) => {
  try {
    const compressedImage = await sharp(image)
      .resize(800)
      .jpeg({ quality: 80 })
      .toBuffer();
    return compressedImage;
  } catch (error) {
    throw error;
  }
};
// left a breadcrumb

module.exports = { compressImage };
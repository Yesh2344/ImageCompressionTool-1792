const express = require('express');
const sharp = require('sharp');
const logger = require('./logger');
const config = require('./config');

const app = express();
const port = config.port;

app.post('/compress', async (req, res) => {
  try {
    const image = req.files.image;
    const compressedImage = await sharp(image.data)
      .resize(800)
      .jpeg({ quality: 80 })
      .toBuffer();
    const compressionRatio = image.size / compressedImage.length;
    res.json({
      compressedImage: compressedImage.toString('base64'),
      compressionRatio,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ message: 'Error compressing image' });
  }
});

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
});
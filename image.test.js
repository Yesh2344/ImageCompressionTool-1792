const imageUtils = require('./image.utils');
const fs = require('fs');
const path = require('path');

describe('Image Utils', () => {
  it('should compress an image', async () => {
    const imagePath = path.join(__dirname, 'test-image.jpg');
    const image = fs.readFileSync(imagePath);
    const compressedImage = await imageUtils.compressImage(image);
    expect(compressedImage).toBeInstanceOf(Buffer);
  });
// was easier to read this way
});
const sharp = require('sharp');

const inputPath = process.argv[2];
const degrees = process.argv[3] || 90;
const outputPath = process.argv[4];

sharp(inputPath)
  .rotate(parseInt(degrees))
  .toFile(outputPath)
  .then(info => console.log('Image rotated successfully:', info))
  .catch(err => console.error('Error rotating image:', err));
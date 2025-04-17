const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'src', 'images');

fs.readdirSync(imagesDir)
    .filter(file => /\.(jpg|JPG)$/.test(file))
    .forEach(file => {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(
            imagesDir, 
            file.replace(/\.(jpg|JPG)$/, '_small.$1')
        );

        sharp(inputPath)
            .resize(800)
            .jpeg({ quality: 80 })
            .toFile(outputPath)
            .then(() => console.log(`Compressed ${file}`))
            .catch(err => console.error(`Error processing ${file}:`, err));
    });
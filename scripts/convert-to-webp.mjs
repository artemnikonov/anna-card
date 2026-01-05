import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const IMAGES_DIR = './public/images';
const QUALITY = 85;

async function getImageFiles(dir) {
  const files = [];
  const items = await readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = join(dir, item.name);
    if (item.isDirectory()) {
      files.push(...await getImageFiles(fullPath));
    } else if (['.jpg', '.jpeg', '.png'].includes(extname(item.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function convertToWebp(filePath) {
  const originalStats = await stat(filePath);
  const originalSize = originalStats.size;
  
  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  await sharp(filePath)
    .webp({ quality: QUALITY })
    .toFile(webpPath);
  
  const webpStats = await stat(webpPath);
  const webpSize = webpStats.size;
  
  const savings = ((originalSize - webpSize) / originalSize * 100).toFixed(1);
  console.log(`✓ ${basename(filePath)}: ${(originalSize/1024).toFixed(0)}KB → ${(webpSize/1024).toFixed(0)}KB (-${savings}%)`);
  
  await unlink(filePath);
  console.log(`  Deleted original: ${basename(filePath)}`);
  
  return originalSize - webpSize;
}

async function main() {
  console.log('Converting images to WebP...\n');

  const files = await getImageFiles(IMAGES_DIR);
  let totalSaved = 0;

  for (const file of files) {
    try {
      totalSaved += await convertToWebp(file);
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\nTotal saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log('\n⚠️  Don\'t forget to update image references in code from .jpg/.png to .webp');
}

main();


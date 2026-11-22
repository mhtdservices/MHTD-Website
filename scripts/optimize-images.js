import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const srcDir = path.resolve('src/images');
const origDir = path.resolve('src/images/originals');
const publicDir = path.resolve('public');

// Card images: resized to ~500px (1x) plus 2x variant up to 1000px
const CARD_IMAGES = [
  'pomageSolaire.webp',
  'chauffeeausolaire.webp',
  'energisSolaire.webp',
  'arrosageAutomatique.webp',
  'injectionReseau.webp',
  'hybride.webp',
  'chauffe-eau-solaire.webp',
  'jasolar.webp',
  'onduleur.webp',
  'accessoires.webp',
  'coffret1.webp',
  'eclairage-solaire.webp',
  'pompe.webp'
];

// Carousel & Hero images: re-compressed with quality 70-75
const CAROUSEL_HERO_IMAGES = {
  'agricole.webp': { width: 1000, quality: 72, copyToPublic: true },
  'arrosage.webp': { width: 1000, quality: 72, copyToPublic: false },
  'ongrid.webp': { width: 1000, quality: 72, copyToPublic: false },
};

// Section background / banner images
const BACKGROUND_IMAGES = {
  'background.webp': { width: 1000, quality: 70 },
  'contactImage.webp': { width: 640, quality: 75 },
  'warranty.webp': { width: 640, quality: 75 },
};

async function optimize() {
  if (!fs.existsSync(origDir)) {
    fs.mkdirSync(origDir, { recursive: true });
    const currentFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.webp') && !f.includes('@2x'));
    for (const file of currentFiles) {
      fs.copyFileSync(path.join(srcDir, file), path.join(origDir, file));
    }
    console.log(`Originals preserved in ${origDir}`);
  }

  let totalBefore = 0;
  let totalAfter1x = 0;

  console.log('='.repeat(78));
  console.log(' MHTD IMAGE OPTIMIZATION (Sharp)');
  console.log('='.repeat(78));
  console.log('Image'.padEnd(28) + 'Original'.padEnd(14) + 'Optimized (1x)'.padEnd(18) + '2x Variant'.padEnd(14) + 'Savings');
  console.log('-'.repeat(78));

  // 1. Optimize Card Images
  for (const filename of CARD_IMAGES) {
    const origPath = path.join(origDir, filename);
    if (!fs.existsSync(origPath)) continue;

    const origStat = fs.statSync(origPath);
    totalBefore += origStat.size;

    const baseName = filename.replace('.webp', '');
    const out1x = path.join(srcDir, filename);
    const out2x = path.join(srcDir, `${baseName}@2x.webp`);

    // 1x variant: 500px wide, quality 75
    await sharp(origPath)
      .resize({ width: 500, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(out1x);

    // 2x variant: up to 1000px wide, quality 75
    await sharp(origPath)
      .resize({ width: 1000, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toFile(out2x);

    const stat1x = fs.statSync(out1x);
    const stat2x = fs.statSync(out2x);
    totalAfter1x += stat1x.size;

    const origKb = (origStat.size / 1024).toFixed(1) + ' KiB';
    const optKb = (stat1x.size / 1024).toFixed(1) + ' KiB';
    const opt2xKb = (stat2x.size / 1024).toFixed(1) + ' KiB';
    const savedKb = ((origStat.size - stat1x.size) / 1024).toFixed(1) + ' KiB';

    console.log(filename.padEnd(28) + origKb.padEnd(14) + optKb.padEnd(18) + opt2xKb.padEnd(14) + `-${savedKb}`);
  }

  // 2. Optimize Carousel & Hero Images
  for (const [filename, config] of Object.entries(CAROUSEL_HERO_IMAGES)) {
    const origPath = path.join(origDir, filename);
    if (!fs.existsSync(origPath)) continue;

    const origStat = fs.statSync(origPath);
    totalBefore += origStat.size;

    const outPath = path.join(srcDir, filename);
    await sharp(origPath)
      .resize({ width: config.width, withoutEnlargement: true })
      .webp({ quality: config.quality, effort: 6 })
      .toFile(outPath);

    if (config.copyToPublic) {
      fs.copyFileSync(outPath, path.join(publicDir, filename));
    }

    const stat = fs.statSync(outPath);
    totalAfter1x += stat.size;

    const origKb = (origStat.size / 1024).toFixed(1) + ' KiB';
    const optKb = (stat.size / 1024).toFixed(1) + ' KiB';
    const savedKb = ((origStat.size - stat.size) / 1024).toFixed(1) + ' KiB';

    console.log(filename.padEnd(28) + origKb.padEnd(14) + optKb.padEnd(18) + '-'.padEnd(14) + `-${savedKb}`);
  }

  // 3. Optimize Background Images
  for (const [filename, config] of Object.entries(BACKGROUND_IMAGES)) {
    const origPath = path.join(origDir, filename);
    if (!fs.existsSync(origPath)) continue;

    const origStat = fs.statSync(origPath);
    totalBefore += origStat.size;

    const outPath = path.join(srcDir, filename);
    await sharp(origPath)
      .resize({ width: config.width, withoutEnlargement: true })
      .webp({ quality: config.quality, effort: 6 })
      .toFile(outPath);

    const stat = fs.statSync(outPath);
    totalAfter1x += stat.size;

    const origKb = (origStat.size / 1024).toFixed(1) + ' KiB';
    const optKb = (stat.size / 1024).toFixed(1) + ' KiB';
    const savedKb = ((origStat.size - stat.size) / 1024).toFixed(1) + ' KiB';

    console.log(filename.padEnd(28) + origKb.padEnd(14) + optKb.padEnd(18) + '-'.padEnd(14) + `-${savedKb}`);
  }

  console.log('-'.repeat(78));
  console.log(`TOTAL (1x web payload): ${(totalBefore / 1024).toFixed(1)} KiB -> ${(totalAfter1x / 1024).toFixed(1)} KiB`);
  console.log(`TOTAL NET SAVINGS: -${((totalBefore - totalAfter1x) / 1024).toFixed(1)} KiB (-${(((totalBefore - totalAfter1x) / totalBefore) * 100).toFixed(0)}%)`);
  console.log('='.repeat(78));
}

optimize().catch(err => {
  console.error('Image optimization failed:', err);
  process.exit(1);
});

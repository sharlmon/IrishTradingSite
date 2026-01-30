
const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\8710204b-d9cc-4ad2-8f70-d4d3e76d08ee';
const destDir = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\IrishTradingSite\\src\\assets';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const fileMap = {
    'uploaded_media_0_1769790640976.jpg': 'team-gate.jpg',
    'uploaded_media_1_1769790640976.jpg': 'foundation-workers.jpg',
    'uploaded_media_2_1769790640976.jpg': 'foundation-wide.jpg',
    'uploaded_media_3_1769790640976.jpg': 'team-huddle.jpg',
    'uploaded_media_4_1769790640976.jpg': 'worker-back-brand.jpg',

    'uploaded_media_0_1769790662863.jpg': 'foundation-rebar-1.jpg',
    'uploaded_media_1_1769790662863.jpg': 'foundation-rebar-2.jpg',
    'uploaded_media_2_1769790662863.jpg': 'team-site.jpg',
    'uploaded_media_3_1769790662863.jpg': 'rebar-work-detailed.jpg',

    'uploaded_media_0_1769790676059.jpg': 'rebar-sky.jpg',
    'uploaded_media_1_1769790676059.jpg': 'roof-work.jpg',
    'uploaded_media_2_1769790676059.jpg': 'rebar-pattern.jpg',
    'uploaded_media_3_1769790676059.jpg': 'steel-structure.jpg',

    'uploaded_media_0_1769790703902.jpg': 'building-construction.jpg',
    'uploaded_media_1_1769790703902.jpg': 'tank-construction.jpg',
    'uploaded_media_2_1769790703902.jpg': 'tank-rebar.jpg',
    'uploaded_media_3_1769790703902.jpg': 'road-roller-1.jpg',
    'uploaded_media_4_1769790703902.jpg': 'road-roller-2.jpg',

    'uploaded_media_0_1769790729528.jpg': 'rebar-workers-large.jpg',
    'uploaded_media_1_1769790729528.jpg': 'road-finished-1.jpg',
    'uploaded_media_2_1769790729528.jpg': 'road-finished-2.jpg',
    'uploaded_media_3_1769790729528.jpg': 'road-finished-3.jpg'
};

for (const [src, dest] of Object.entries(fileMap)) {
    const srcPath = path.join(sourceDir, src);
    const destPath = path.join(destDir, dest);

    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${src} to ${dest}`);
    } else {
        console.error(`Source file not found: ${srcPath}`);
    }
}

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = 'C:\\Users\\14036\\Desktop\\102188682_p0.png';
const outputPath = path.join(__dirname, 'source', 'images', '102188682_p0.webp');

console.log('开始转换图片...');
console.log('输入文件:', inputPath);
console.log('输出文件:', outputPath);

// 确保输出目录存在
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 转换图片
sharp(inputPath)
  .webp({ quality: 80 })
  .toFile(outputPath)
  .then(() => {
    console.log('✅ 图片转换成功！');
    console.log('输出文件:', outputPath);
  })
  .catch(err => {
    console.error('❌ 图片转换失败:', err);
  });

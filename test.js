const fs = require('fs');
const file = 'index.html';
if (!fs.existsSync(file)) {
  throw new Error(`${file} not found`);
}
console.log(`${file} exists`);


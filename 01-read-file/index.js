const fs = require('fs');
const path = require('path');
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'));

let data = '';
stream.on('data', partialdata => data += partialdata);
stream.on('end', () => process.stdout.write(data));
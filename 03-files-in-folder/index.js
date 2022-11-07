const fs = require('fs');
const path = require('path');
const urldir = path.join(__dirname, 'secret-folder');

fs.readdir(urldir, { withFileTypes: true }, (err, arr) => {
  if(err)console.log(err);
  arr.forEach(item => {
    fs.stat(`${urldir}/${item.name}`, (err, file) => {
      if(err)console.log(err);
      if (file.isFile()) {
          console.log(`${item.name.split('.').join(' - ')} = ${file.size} byte`);
      }
    });
  });
});
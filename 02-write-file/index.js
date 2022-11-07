const fs = require('fs');
const process = require('process');
const { stdin, stdout } = process;
const path = require('path');
let writeableStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));
console.log('Пожалуйста, введите текст');

stdin.on('data', (data) => {
  if (data.toString().trim() == 'exit') {
    console.log('Вы ввели команду "exit"! Пока.');
    process.exit();     
  }
  console.log('Пожалуйста, введите текст');
  writeableStream.write(data);
});

process.stdin.resume();
process.on('SIGINT', () => {
  console.log('Вы использовали команду "ctrl+c"! Пока.');
  process.exit(); 
});


const fs = require('fs');

// Reading the file
const readText = fs.readFileSync('./text/read.txt','utf-8');


// writing text

const writenText = fs.writeFileSync('./text/write.txt',readText + "This is my writtenText")

console.log(readText);








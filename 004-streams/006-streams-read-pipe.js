const {createReadStream, createWriteStream} = require('fs');
const path = require('path');
const {createGzip} = require('zlib')

const FILE_NAME = path.resolve(process.cwd(), './data/3-law.txt');

const readStream = createReadStream(FILE_NAME);
const writeStream = createWriteStream(`${FILE_NAME}.gz`, {flags: 'wx'});

const zip = createGzip();

readStream
  .pipe(zip)
  .pipe(writeStream);

writeStream.on('error', err => {
  console.log(`Write error ${err.code}, ${err.message}`);
});

zip.on('error', () => {
  console.log(`Zip error ${e.message}`);
})

readStream.on('error', err => {
  console.log(`Read error ${err.code}, ${err.message}`);
});

readStream.once('close', () => {
  console.log('Readable stream closed');
});

writeStream.once('close', () => {
  console.log('Writable stream closed');
})



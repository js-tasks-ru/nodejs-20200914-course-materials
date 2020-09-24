const {createReadStream} = require('fs');
const path = require('path');

const FILE_NAME = path.resolve(process.cwd(), './data/3-law.txt');

const readStream = createReadStream(FILE_NAME);

readStream.once('close', () => {
  console.log("Stream closed");
});

(async function () {

  let totalSize = 0;
  for await (let chunk of readStream) {
    console.log(`Read ${chunk.length} bytes`);
    totalSize += chunk.length;
  }
  console.log(`Total size: ${totalSize}`);

})()
  .catch(error => {
    console.log(error);
  });

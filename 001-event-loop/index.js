const {lookup} = require('dns');

for (let i = 0; i < 20; i++) {
  lookup('google.com', (err, addr) => {
    console.log("DEADBEEF index.js 5: ", addr);
  })
}

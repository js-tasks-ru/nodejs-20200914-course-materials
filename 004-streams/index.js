const {Server} = require('http');

const server = new Server();

server.on('request', (req /*http.IncomingMessage*/, res /*http.ServerResponse*/) => {
  // const chunks = [];
  // req.on('data', chunk => chunks.push(chunk));
  //
  // req.on('end', () => {
  //   const body = Buffer.concat(chunks).toString()
  //   console.log('Request body: ', body);
  //   res.end(body)
  // });
  //
  req.pipe(res);
});

server.listen(3000);

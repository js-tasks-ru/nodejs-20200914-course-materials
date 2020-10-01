const fs = require('fs');
const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  // ctx.req -> http.IncomingMessage
  // ctx.request -> koa.Request

  // console.log('url: ', ctx.request.url); // = /path?param=value
  // console.log('query: ', ctx.request.querystring); // = param=value
  // console.log('path: ', ctx.request.path); // = /path
  // console.log('query params', ctx.request.query); // {param:"value"}
  // console.log('method: ', ctx.request.method); // GET
  // console.log('headers: ', ctx.request.headers); //ctx.header

  // ctx.res -> http.ServerResponse
  // ctx.response -> koa.Response

  // ctx.throw(401);
  // ctx.response.body = 'Hello world'; // res.send | ctx.body

  // ctx.response.body = {
  //   foo: 'bar',
  // };
  ctx.body = {foo: 'bar'};

  // ctx.set('content-type', 'application/json');
  // ctx.response.body = fs.createReadStream('./package.json');

  // ctx.set('content-type', 'text/html');
  // ctx.response.body = Buffer.from('asdfasfd');


  // ctx.response.set('x-content-type', 'application/json');

  ctx.cookies.set('my-cookie2', 'test', {signed: false, http: true/*, secure: true*/});

  ctx.response.status = 201;
  // ctx.status = 201;

  // ctx.throw(404, 'Resource not found', {resource: 'user'});

  // ctx.response.redirect('https://google.com')

  // ctx.app = Koa app instance
});


app.listen(3000, () => {
  console.log('Server started');
});

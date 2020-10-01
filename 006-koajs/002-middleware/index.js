const Koa = require('koa');

const app = new Koa();

const delay = t => new Promise(resolve => setTimeout(resolve, t))

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  console.log(`${ctx.method} - ${ctx.url} ${Date.now() - start}ms`);
})

app.use(async (ctx) => {
  await delay(500);
  ctx.body = 'hello';
});

app.listen(3000, () => {
  console.log('Server started');
});

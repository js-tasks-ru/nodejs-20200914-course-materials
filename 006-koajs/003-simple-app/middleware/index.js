const router = require('./router');
const bodyparser = require('koa-bodyparser');

module.exports = (app) => {

  // app.use(async (ctx, next) => {
  //   const body = [];
  //   for await (const chunk of ctx.req) {
  //     body.push(chunk)
  //   }
  //   try {
  //     ctx.request.body = JSON.parse(Buffer.concat(body).toString())
  //   } catch (e) {
  //   }
  //   return next()
  // });
  app.use(bodyparser())
  app.use(router.middleware());
}

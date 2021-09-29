const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const sum = require('./sum');
const rest = require('./rest');

router.get('/', () => {
  const result = 'Recuerda usar las rutas /add/number1/number2 y /rest/number1/number2';
  return ctx.body = { result };
});

router.get('/add/:a/:b', (ctx, next) => {
  const result = sum(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
  return ctx.body = { result };
});

router.get('/rest/:a/:b', (ctx, next) => {
  const result = rest(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
  return ctx.body = { result };
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);

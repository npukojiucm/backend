const Koa = require("koa");
const Router = require("koa-router");
const cors = require("@koa/cors");

const app = new Koa();

app.use(cors());
app.use(require('koa-bodyparser')());

const notes = [];
let nextId = 1;

const router = new Router();

router.get('/notes', async (ctx, next) => {
    ctx.status = 200;
    ctx.body = {
        notes: notes,
    };
});

router.post('/notes', async (ctx, next) => {
    notes.push({ ...ctx.request.body, id: nextId++ });
    ctx.status = 204;
});

router.delete('/notes', async (ctx, next) => {
    const index = notes.findIndex(note => note.id === ctx.request.body);
    notes.splice(index, 1);
    ctx.status = 204;
});

app.use(router.routes());

module.exports = app;

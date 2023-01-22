const jsonServer =render("json-server");
const server =jsonServer.create();
const router=jsonServer.router("db.json");
const middlewares=jsonServer.default();
const port =process.env.PORT ||3001;

server.use(middlewares);
server.use(router);
server.listen(port);
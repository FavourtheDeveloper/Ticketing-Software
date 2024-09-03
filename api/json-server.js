const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('events.json'); // Path to your db.json file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
  });

module.exports = server;

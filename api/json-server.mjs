const jsonServer = require('json-server');
const { createServer } = require('http');
const { fileURLToPath } = require('url');
const path = require('path');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, '../events.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

console.log('Serving data from:', path.join(__dirname, '../events.json'));

const port = process.env.PORT || 3000;
createServer(server).listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
  console.log('Serving data from:', path.join(__dirname, '../events.json'));
});

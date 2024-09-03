import jsonServer from 'json-server';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import path from 'path';

// Convert file URL to path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the JSON Server
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'events.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

// Listen on port 3000
const port = 3000;
createServer(server).listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

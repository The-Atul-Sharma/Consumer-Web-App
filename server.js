const express = require('express');
const next = require('next');
const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, `./env/${process.env.ENV_FILE}`) });

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

function createServer() {
  const server = express();

  server.get('*', (req, res) => {
    req.url = req.url.replace(/\/$/, '');
    if (req.url === '') { req.url = '/'; }
    handle(req, res);
  });

  return server;
}

if (dev) {
  app.prepare().then(() => {
    const server = createServer();

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    });
  });
} else {
  const server = createServer();

  module.exports = server;
}
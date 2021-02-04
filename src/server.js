const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {
  constructor() {
    this.server = express();
  }

  middlewares() {
    this.server.use(cors);
    this.server.use(
      bodyParser.urlencoded({
        extended: false,
      }),
    );
    this.server.use(bodyParser.json());
  }
}

module.exports = new Server().server;

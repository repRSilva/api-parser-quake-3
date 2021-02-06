/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const recursiveReaddir = require('recursive-readdir');
const GamesController = require('./controllers/games/gamesController');

class Server {
  constructor() {
    this.server = express();
    global.jsonLog = this.getParserLogToJson();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(
      bodyParser.urlencoded({
        extended: false,
      }),
    );
    this.server.use(bodyParser.json());
  }

  routes() {
    const pathFiles = path.resolve(path.resolve('./').concat('/src/routes'));
    recursiveReaddir(pathFiles, ['!*.js'], (err, files) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }

      files.forEach(element => {
        const route = require(element);
        this.server.use(route);
      });
    });
  }

  getParserLogToJson() {
    const pathName = path.resolve(__dirname, 'src', 'data');
    const fileName = 'games.log';
    const logParsed = GamesController.parserLogToJson({ pathName, fileName });
    return logParsed;
  }
}

module.exports = new Server().server;

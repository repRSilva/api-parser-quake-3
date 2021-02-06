const GamesService = require('../../services/games/gamesServices');

class GamesController {
  constructor() {
    this.gamesService = new GamesService();
  }

  parserLogToJson({ pathName, fileName }) {
    const file = this.gamesService.getFile({ pathName, fileName });
    const fileParsed = this.gamesService.initParser({ file });
    return fileParsed;
  }

  async list(req, res) {
    res.json(global.jsonLog);
  }
}

module.exports = new GamesController();

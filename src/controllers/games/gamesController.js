const GamesService = require('../../services/games/gamesServices');

class GamesController {
  constructor() {
    this.gamesService = new GamesService();
  }

  parserLogToJson({ pathName, fileName }) {
    const { error, errorMessage, file } = this.gamesService.getFile({
      pathName,
      fileName,
    });

    if (error) {
      return { error, errorMessage, file };
    }

    const fileParsed = this.gamesService.initParser({ file });
    return { error, errorMessage, file: fileParsed };
  }

  async list(req, res) {
    res.json(global.jsonLog);
  }
}

module.exports = new GamesController();

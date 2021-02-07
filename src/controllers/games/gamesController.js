const GamesService = require('../../services/games/gamesServices');

class GamesController {
  constructor() {
    this.gamesService = new GamesService();
  }

  initConvertLogToJson({ pathName, fileName }) {
    const { error, errorMessage, file } = this.gamesService.getFile({
      pathName,
      fileName,
    });

    if (error) {
      return { error, errorMessage, file };
    }

    const fileParsed = this.gamesService.convertLogToJson({ file });
    return { error, errorMessage, file: fileParsed };
  }

  async listByName(req, res) {
    const { name } = req.query;
    if (!name) {
      res
        .status(400)
        .send({ error: true, errorMessage: 'The name parameter is required!' });
    }

    const nameFilter = name.replace(/"/g, '');
    const gamesFiltred = global.jsonLog.find(game => game[nameFilter]);

    if (gamesFiltred) {
      res.json(gamesFiltred);
      return;
    }

    res.status(400).send({ error: true, errorMessage: 'Game not found!' });
  }

  async listAll(req, res) {
    if (global.jsonLog.length > 0) {
      res.json(global.jsonLog);
      return;
    }
    res.status(400).send({ error: true, errorMessage: 'Games not found!' });
  }
}

module.exports = new GamesController();

const GamesService = require('../../services/games/gamesServices');

class GamesController {
  constructor() {
    this.gamesService = new GamesService();
  }

  async getFile({ pathName, fileName }) { }

  async list(req, res) { }
}

module.exports = new GamesController();

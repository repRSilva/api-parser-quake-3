const GamesRepository = require('../../repositories/games/gamesRepository');

class GamesService {
  constructor() {
    this.gamesRepository = new GamesRepository();
  }

  async getFile({ pathName, fileName }) { }
}

module.exports = GamesService;

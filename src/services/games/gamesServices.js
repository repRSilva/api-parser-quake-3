const GamesRepository = require('../../repositories/games/gamesRepository');

class GamesService {
  constructor() {
    this.gamesRepository = new GamesRepository();
  }

  getFile({ pathName, fileName }) {
    return 'file';
  }

  initParser({ file }) {
    return 'file';
  }
}

module.exports = GamesService;

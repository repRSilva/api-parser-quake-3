const fs = require('fs');
const GamesRepository = require('../../repositories/games/gamesRepository');

class GamesService {
  constructor() {
    this.gamesRepository = new GamesRepository();
  }

  getFile({ pathName, fileName }) {
    if (!fs.existsSync(`${pathName}\\${fileName}`)) {
      return { error: true, errorMessage: '!nvalid file path', file: '' };
    }

    const fileLog = fs.readFileSync(`${pathName}\\${fileName}`, {
      encoding: 'utf8',
    });

    return { error: false, file: fileLog };
  }

  initParser({ file }) {
    return file;
  }
}

module.exports = GamesService;

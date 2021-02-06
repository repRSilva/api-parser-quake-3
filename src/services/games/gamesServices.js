const fs = require('fs');
const GamesRepository = require('../../repositories/games/gamesRepository');

class GamesService {
  constructor() {
    this.gamesRepository = new GamesRepository();
    this.lines = [];
    this.jsonGames = [];
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

  convertLogToJson({ file }) {
    this.lines = file.split('\n');

    this.lines.forEach(line => {
      const LineDetail = line.trim().split(' ');
      console.log('DETAIL: ', LineDetail);
    });
  }
}

module.exports = GamesService;

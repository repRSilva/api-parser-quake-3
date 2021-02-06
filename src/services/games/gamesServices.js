const fs = require('fs');
const GamesRepository = require('../../repositories/games/gamesRepository');

class GamesService {
  constructor() {
    this.gamesRepository = new GamesRepository();
    this.lines = [];
    this.jsonGames = [];
  }

  getFile({ pathName, fileName }) {
    const {
      error,
      errorMessage,
      file,
    } = this.gamesRepository.getFileByPathAndName({ pathName, fileName });

    return { error, errorMessage, file };
  }

  convertLogToJson({ file }) {
    this.lines = file.split('\n');

    this.lines.forEach(line => {
      const LineDetail = line.trim().split(' ');
      // console.log('DETAIL: ', LineDetail);
    });
  }
}

module.exports = GamesService;

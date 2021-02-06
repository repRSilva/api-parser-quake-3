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
      const lineDetail = line.trim().split(' ');

      switch (lineDetail[1]) {
        case 'InitGame:':
          // console.log('INIT GAME: ', line);
          this.createNewGame();
          break;
        case 'Kill:':
          // console.log('KILL: ', line);
          break;
        case 'ClientUserinfoChanged:':
          // console.log('NEW USER: ', line);
          break;
        case '<world>':
          // console.log('WORD: ', line);
          break;
        default:
          break;
      }
    });
  }

  createNewGame() {
    const key = `game_${this.jsonGames.length + 1}`;
    const data = {
      total_kills: 0,
      players: [],
      kills: {},
    };

    this.jsonGames.push({ [key]: data });
  }
}

module.exports = GamesService;

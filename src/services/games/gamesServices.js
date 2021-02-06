const { execSync } = require('child_process');
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
        case 'ClientUserinfoChanged:':
          // console.log('NEW USER: ', line);
          this.createNewUser(line);
          break;
        case 'Kill:':
          // console.log('KILL: ', line);
          break;
        case '<world>':
          // console.log('WORD: ', line);
          break;
        default:
          break;
      }
    });

    return this.jsonGames;
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

  createNewUser(line) {
    const indexLastGame = this.jsonGames.length - 1;
    const newUser = line
      .split('n\\')[1]
      .split('t\\')[0]
      .toString()
      .replace('\\', '');

    const lastGame = this.jsonGames[indexLastGame][`game_${indexLastGame + 1}`];

    const exists = lastGame.players.find(player => player === newUser);

    if (!exists) lastGame.players.push(newUser);
  }
}

module.exports = GamesService;

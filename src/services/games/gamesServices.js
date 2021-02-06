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
          this.createNewGame();
          break;
        case 'ClientUserinfoChanged:':
          this.createNewUser(line);
          break;
        case 'Kill:':
          this.createNewKill(line, lineDetail);
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
    const newUser = line
      .split('n\\')[1]
      .split('t\\')[0]
      .toString()
      .replace('\\', '');
    const lastGame = this.getTheLastGame();
    const exists = lastGame.players.find(player => player === newUser);

    if (!exists) {
      lastGame.players.push(newUser);
      lastGame.kills = { ...lastGame.kills, [newUser]: 0 };
    }
  }

  createNewKill(line, lineDetail) {
    const userKill = lineDetail[5];
    const lastGame = this.getTheLastGame();
    lastGame.total_kills++;

    if (userKill.trim() === '<world>') {
      this.createWorldNewKill(line);
      return;
    }

    this.createUserNewKill(line);
  }

  createUserNewKill(line) {
    const userKilled = this.getUserKilled(line);
    const lastGame = this.getTheLastGame();

    lastGame.kills[userKilled] = lastGame.kills[userKilled]++ || 1;
  }

  createWorldNewKill(line) {
    const worldKilled = this.getUserKilled(line);
    const lastGame = this.getTheLastGame();

    lastGame.kills[worldKilled] = lastGame.kills[worldKilled]-- || -1;
  }

  getTheLastGame() {
    const indexLastGame = this.jsonGames.length - 1;
    return this.jsonGames[indexLastGame][`game_${indexLastGame + 1}`];
  }

  getUserKilled(line) {
    const parts = line.split(':');
    const user = parts[parts.length - 1];
    const userKilled = user.split('killed')[1].split('by')[0].trim();

    return userKilled;
  }
}

module.exports = GamesService;

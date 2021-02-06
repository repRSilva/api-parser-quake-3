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
    const newUser = line
      .split('n\\')[1]
      .split('t\\')[0]
      .toString()
      .replace('\\', '');
    const lastGame = this.getTheLastGame();
    const exists = lastGame.players.find(player => player === newUser);

    if (!exists) lastGame.players.push(newUser);
  }

  createNewKill(line, lineDetail) {
    const userKill = lineDetail[5];
    const lastGame = this.getTheLastGame();
    lastGame.total_kills++;

    if (userKill === '<world>') {
      this.createWorldNewKill(line, lineDetail);
      return;
    }

    this.createUserNewKill(line, lineDetail);
  }

  createUserNewKill(line, lineDetail) { }

  createWorldNewKill(line, lineDetail) { }

  getTheLastGame() {
    const indexLastGame = this.jsonGames.length - 1;
    return this.jsonGames[indexLastGame][`game_${indexLastGame + 1}`];
  }
}

module.exports = GamesService;

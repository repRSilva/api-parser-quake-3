const path = require('path');
const gamesController = require('../../../controllers/games/gamesController');

describe('GamesController.js file test suite', () => {
  test('Test function initConvertLogToJson success', () => {
    const pathName = path.resolve(__dirname, '..', '..', '..', 'data');
    const fileName = 'games.log';
    const response = gamesController.initConvertLogToJson({
      pathName,
      fileName,
    });

    expect(response.error).toBe(false);
    expect(response.file.length).toEqual(21);
  });
});

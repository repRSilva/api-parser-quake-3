/* eslint-disable no-undef */
const path = require('path');
const GamesService = require('../../../services/games/gamesServices');

const service = new GamesService();
describe('GamesService.js file test suite', () => {
  test('Test function getFile success', () => {
    const pathName = path.resolve(__dirname, '..', '..', '..', 'data');
    const fileName = 'games.log';
    const response = service.getFile({
      pathName,
      fileName,
    });

    expect(response.error).toBe(false);
  });

  test('Test function getFile fail for pathName or fileName invalid', () => {
    const pathName = path.resolve(__dirname, 'data');
    const fileName = 'games.log';
    const response = service.getFile({
      pathName,
      fileName,
    });

    expect(response.error).toBe(true);
  });
});

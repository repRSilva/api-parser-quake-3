const path = require('path');
const GamesRepository = require('../../../repositories/games/gamesRepository');

const repository = new GamesRepository();

describe('GamesRepository.js file test suite', () => {
  test('Test function getFileByPathAndName success', () => {
    const pathName = path.resolve(__dirname, '..', '..', '..', 'data');
    const fileName = 'games.log';
    const response = repository.getFileByPathAndName({
      pathName,
      fileName,
    });

    expect(response.error).toBe(false);
  });

  test('Test function getFileByPathAndName fail for pathName or fileName invalid', () => {
    const pathName = path.resolve(__dirname, 'data');
    const fileName = 'games.log';
    const response = repository.getFileByPathAndName({
      pathName,
      fileName,
    });

    expect(response.error).toBe(true);
  });
});

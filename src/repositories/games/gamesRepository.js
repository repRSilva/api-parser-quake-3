const fs = require('fs');

class GamesRepository {
  getFileByPathAndName({ pathName, fileName }) {
    if (!fs.existsSync(`${pathName}\\${fileName}`)) {
      return { error: true, errorMessage: '!nvalid file path', file: '' };
    }

    const fileLog = fs.readFileSync(`${pathName}\\${fileName}`, {
      encoding: 'utf8',
    });

    return { error: false, errorMessage: '', file: fileLog };
  }
}

module.exports = GamesRepository;

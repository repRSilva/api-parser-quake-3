const { Router } = require('express');
const gameController = require('../../controllers/games/gamesController');

const gameRoutes = Router();

gameRoutes.get('/games/list/name', (req, res) =>
  gameController.listByName(req, res),
);
gameRoutes.get('/games/list/all', (req, res) =>
  gameController.listAll(req, res),
);

module.exports = gameRoutes;

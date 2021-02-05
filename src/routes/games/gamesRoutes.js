const { Router } = require('express');
const gameController = require('../../controllers/games/gamesController');

const gameRoutes = Router();

gameRoutes.get('/games/list/name', (req, res) => gameController.list(req, res));

module.exports = gameRoutes;

const { Router } = require('express');
const gameController = require('../../controllers/games/gamesController');

const gameRoutes = Router();

gameRoutes.get('/games/list/name', gameController.list);

module.exports = gameRoutes;

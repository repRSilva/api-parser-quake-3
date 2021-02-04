const express = require('express');

const router = express.router();

router.get('/games/list/name/:name', (req, res) => {
  res.status(200).send({ Route: 'Route to list games by name' });
});

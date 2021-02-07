const request = require('supertest');
const { url } = require('../config/config.json');

describe('Server.js file test suite', () => {
  test('Initialization of the server.js file', () => {
    const app = require('../../server');
  });

  test('Test on the "/games/list/name" route ', async () => {
    const response = await request(url).get('/games/list/name?name=game_1');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      game_1: {
        total_kills: 0,
        players: ['Isgalamido'],
        kills: { Isgalamido: 0 },
      },
    });
  });

  test('Test on the "/games/list/all" route ', async () => {
    const response = await request(url).get('/games/list/all');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toEqual(21);
  });
});

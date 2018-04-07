const app = require('../../app')
const request = require('supertest')

describe('Locations controller', () => {
  describe('GET /locations requests', () => {
    it('should return a 200', () => {
      return request(app).get('/locations').then((res) => {
        expect(res.statusCode).toBe(200)
      })
    });
  });
});

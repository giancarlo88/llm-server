const app = require('../../app')
const request = require('supertest')

describe('Controller index', () => {
  describe('all unknown requests', () => {
    it('should return a 404', () => {
      return request(app).get('/foo').then((res) => {
        expect(res.statusCode).toBe(404)
        expect(res.text).toBe('Not found')
      })
    });
  });
});

import app from '../app';
import * as request from 'supertest';
import { syncDatabase, resetDatabase } from '../models';

describe('Test the "/comments" path', () => {

  beforeAll(syncDatabase);
  // beforeEach(resetDatabase);

  describe('GET request', () => {

    test('It should response the GET method with all comments Array', (done) => {
      return request(app)
        .get('/comments')
        .expect(200)
        .then((res) => {
          expect(res.body.comments).toBeInstanceOf(Array);
          done();
        });
    });

  });

  describe('POST request', () => {

    test('It should response with success anwser', (done) => {
      return request(app)
        .post('/comments')
        .send({ text: 'my comment', movie: 'sample movie' })
        .expect(200)
        .then((res) => {
          expect(res.body.success).toBeDefined;
          // expect(res.body.success).toBe('sample movie');
          done();
        });
    });

    test('It should response with error code 400 for wrong data', (done) => {
      return request(app)
        .post('/comments')
        .send({ text: 'here i post only text' })
        .expect(400)
        .then((res) => {
          expect(res.body.message).toBeDefined;
          // expect(res.body.message).toBe('Please post valid data!');
          done();
        });
    });
  });
});

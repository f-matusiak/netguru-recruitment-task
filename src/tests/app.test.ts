import app from '../app';
import * as request from 'supertest';
import * as db from '../models';
import { seedData } from '../constrains';

describe('Test the "/" path', () => {
  test('It should return 404 error', (done) => {
    return request(app)
      .get('/')
      .expect(404, done);
  });
});

describe('Test the "/comments" path', () => {

  beforeAll(db.syncComments);
  // beforeEach(resetDatabase);

  describe('GET request', () => {
    beforeAll(async () => {
      seedData.comments.map(async (data) => {
        await db.CommentModel.create(data);
      });
    });

    test('It should response with all comments Array', (done) => {
      return request(app)
        .get('/comments')
        .expect(200)
        .then((res) => {
          expect(res.body.comments).toBeInstanceOf(Array);
          expect(res.body.comments).toHaveLength(6);
          done();
        });
    });

    test('It should response with all comments for "First movie"', (done) => {
      return request(app)
        .get('/comments?id=First%20movie')
        .expect(200)
        .then((res) => {
          expect(res.body.comments).toBeInstanceOf(Array);
          expect(res.body.comments).toHaveLength(2);
          done();
        });
    });
  });

  describe('POST request', () => {
    beforeAll(db.resetComments);
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

describe('Test the /movies path', () => {
  describe('GET request', () => {
    test('It should response wiith all movies from database', (done) => {
      return request(app)
        .get('/movies')
        .expect(200)
        .then((res) => {
          expect(res).toBeInstanceOf(Array);
          done();
        });
    });
  });

  describe('POST request', () => {
    test('It should fetch new movie and show it to us', (done) => {
      return request(app)
        .post('/movies')
        .send({ title: 'The Godfather' })
        .expect(200)
        .then((res) => {
          expect(res.body.movie).toBeInstanceOf(Object);
          done();
        });
    });

    test('It should add fetched movie to database', async (done) => {
      await request(app)
        .post('/movies')
        .send({ title: 'The Matrix' })
        .expect(200);

      return await db.MovieModel.findOne({ where: { title: 'The Matrix' } })
        .then((err, res) => {
          expect(res).toBe(Object);
          done();
        });
    });
  });
});

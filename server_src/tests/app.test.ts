import app from '../app';
import * as request from 'supertest';
import * as db from '../models';
import { seedData } from '../constrains';

describe('Test the "/randompath" path', () => {
  test('It should redirect to / and return 200 code', (done) => {
    return request(app)
      .get('/randompath')
      .expect(200, done);
  });
});

describe('Test the "/comments" path', () => {

  beforeAll(db.resetComments);
  // beforeEach(resetDatabase);

  describe('GET request', () => {
    beforeAll(async () => {
      await seedData.comments.map(async (data) => {
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

  beforeAll(db.resetMovies);

  describe('GET request', () => {
    test('It should response with all movies from database', (done) => {
      return request(app)
        .get('/movies')
        .expect(200)
        .then((res) => {
          expect(res.body.movies).toBeInstanceOf(Array);
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

      return await db.MovieModel.findOne({ title: 'The Matrix' })
        .then((res) => {
          expect(res).toBeInstanceOf(Object);
          done();
        });
    });

    test('It should response with error code 400 for wrong data', (done) => {
      return request(app)
        .post('/movies')
        .send({ wrong: 'data' })
        .expect(400, done);
    });
  });
});

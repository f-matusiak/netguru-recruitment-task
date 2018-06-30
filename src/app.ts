import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.send('<h1>Hello There :)</h1>');
});

import { getMovies, postMovies } from './routes/movies';
app.post('/movies', postMovies);
app.get('/movies', getMovies);

import { getComments, postComments } from './routes/comments';
app.post('/comments', postComments);
app.get('/comments', getComments);

app.get('*', (req, res, next) => {
  res.status(404).send('Error: Not Found');
});

export default app;

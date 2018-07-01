import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as db from './models';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.js'));
// });

import { getMovies, postMovies } from './routes/movies';
app.post('/movies', postMovies);
app.get('/movies', getMovies);

import { getComments, postComments } from './routes/comments';
app.post('/comments', postComments);
app.get('/comments', getComments);

app.post('/sync', (req, res, next) => {
  db.syncComments()
    .then(() => {
      db.syncMovies()
        .then(() => {
          res.status(200).send({ message: 'sucessfully synced database!' });
        });
    });
});

app.get('*', (req, res, next) => {
  res.status(404).send('Error: Not Found');
});

export default app;

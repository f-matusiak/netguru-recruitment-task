import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Sequelize from 'sequelize';
import { sequelizeConfig } from './constrains';

const app = express();
const sequelize = new Sequelize(sequelizeConfig);

import { Comment as CommentModelFunc } from './models/CommentModel';
import { Movie as MovieModelFunc } from './models/MovieModel';
// tslint:disable-next-line variable-name
export const CommentModel = CommentModelFunc(sequelize, Sequelize);
// tslint:disable-next-line variable-name
export const MovieModel = MovieModelFunc(sequelize, Sequelize);

CommentModel.sync({ force: true });
// MovieModel.sync({ force: true });

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

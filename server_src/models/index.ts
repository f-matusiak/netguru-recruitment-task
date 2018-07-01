import * as Sequelize from 'sequelize';
import { sequelizeConfig } from '../constrains';

let seqParams;

if (process.env.DATABASE_URL) {
  seqParams = process.env.DATABASE_URL;
} else {
  seqParams = sequelizeConfig;
}

export const sequelize = new Sequelize(seqParams);

import { Comment as CommentModelFunc } from './CommentModel';
import { Movie as MovieModelFunc } from './MovieModel';

// tslint:disable-next-line variable-name
export const CommentModel = CommentModelFunc(sequelize, Sequelize);
// tslint:disable-next-line variable-name
export const MovieModel = MovieModelFunc(sequelize, Sequelize);

export const resetComments = () => {
  return CommentModel.truncate();
};

export const resetMovies = () => {
  return MovieModel.truncate();
};

export const syncComments = () => {
  return CommentModel.sync({ force: true });
};

export const syncMovies = () => {
  return MovieModel.sync({ force: true });
};

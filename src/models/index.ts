import * as Sequelize from 'sequelize';
import { sequelizeConfig } from '../constrains';

export const sequelize = new Sequelize(sequelizeConfig);

import { Comment as CommentModelFunc } from './CommentModel';
import { Movie as MovieModelFunc } from './MovieModel';

// tslint:disable-next-line variable-name
export const CommentModel = CommentModelFunc(sequelize, Sequelize);
// tslint:disable-next-line variable-name
export const MovieModel = MovieModelFunc(sequelize, Sequelize);

export const resetDatabase = () => {
  return CommentModel.truncate()
    .then(() => {
      MovieModel.truncate();
    });
};

export const syncDatabase = () => {
  return CommentModel.sync({ force: true })
    .then(() => {
      MovieModel.truncate({ force: true });
    });
};

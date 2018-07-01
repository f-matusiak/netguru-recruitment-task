import * as mongoose from 'mongoose';
import { mongooseURI } from '../constrains';

mongoose.connect(mongooseURI);

export const Schema = mongoose.Schema;

import { Comment } from './CommentModel';
import { Movie } from './MovieModel';

// tslint:disable-next-line variable-name
export const CommentModel = mongoose.model('comment', Comment);
// tslint:disable-next-line variable-name
export const MovieModel = mongoose.model('movie', Movie);

export const resetComments = () => {
  return CommentModel.remove({});
};

export const resetMovies = () => {
  return MovieModel.remove({});
};

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

// Middleware
export const addMovie = async (movie) => {
  let result = null;
  await MovieModel.findOne({ imdbID: movie.imdbID }, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      result = res;
    }
  });

  if (!result) {
    return MovieModel.create(movie);
  }
  return Promise.resolve(new Error('Movie already exists'));
};

export const resetComments = () => {
  return CommentModel.remove({});
};

export const resetMovies = () => {
  return MovieModel.remove({});
};

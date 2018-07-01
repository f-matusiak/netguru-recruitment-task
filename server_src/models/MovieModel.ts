/* tslint:disable variable-name */
import { Schema } from './index';

const Rating = new Schema({
  source: String,
  value: String,
});

const Movie = new Schema({
  title: String,
  year: String,
  runtime: String,
  director: String,
  actors: String,
  poster: String,
  imdbID: String,
  ratings: [Rating],
});

export { Movie };

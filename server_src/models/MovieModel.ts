/* tslint:disable variable-name */
import { Schema } from './index';

const Movie = new Schema({
  title: String,
  year: String,
  runtime: String,
  director: String,
  actors: String,
  poster: String,
  imdbID: String,
  ratings: [
    {
      source: String,
      value: String,
    },
  ],
});

export { Movie };

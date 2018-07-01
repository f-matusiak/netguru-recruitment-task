import nodeFetch from 'node-fetch';
import { apiKey } from '../constrains';
import { MovieModel } from '../models';

export const getMovies = (req, res, next) => {
  MovieModel.find()
    .then((data) => {
      res.status(200).send({ movies: data });
    })
    .catch((err) => {
      res.status(503).send({ message: err.message });
    });
};

export const postMovies = (req, res, next) => {
  if (Object.keys(req.body).length === 1 && req.body.title) {
    const title = req.body.title.split(' ').join('+');
    nodeFetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=${title}`)
      .then(data => data.json())
      .then((data) => {
        const movie = {
          title: data.Title,
          year: data.Year,
          runtime: data.Runtime,
          director: data.Director,
          actors: data.Actors,
          poster: data.Poster,
          imdbID: data.imdbID,
          ratings: data.Ratings.map((rating) => {
            return {
              source: rating.Source,
              value: rating.Value,
            };
          }),
        };
        MovieModel.create(movie)
          .then(() => {
            res.status(200).send({ movie: data });
          })
          .catch((err) => {
            res.status(500).send({ message: err.message });
          });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  } else {
    res.status(400).send({ message: 'Please post valid data!' });
  }
};

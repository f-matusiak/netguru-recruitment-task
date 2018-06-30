/* tslint:disable variable-name */

const Movie = (sequelize, DataTypes) => {
  const MovieModel = sequelize.define('comment', {
    title: DataTypes.STRING,
    year: DataTypes.STRING,
    runtime: DataTypes.STRING,
    director: DataTypes.STRING,
    actors: DataTypes.STRING,
    poster: DataTypes.STRING,
    imdbID: DataTypes.STRING,
    ratings: DataTypes.JSON,
  });

  return MovieModel;
};

export { Movie };

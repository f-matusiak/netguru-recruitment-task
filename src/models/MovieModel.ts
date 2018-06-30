/* tslint:disable variable-name */

const Movie = (sequelize, DataTypes) => {
  const MovieModel = sequelize.define('comment', {
    title: {
      type: DataTypes.STRING,
    },

  });

  return MovieModel;
};

export { Movie };

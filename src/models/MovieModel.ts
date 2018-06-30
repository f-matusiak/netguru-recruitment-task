/* tslint:disable variable-name */

const Movie = (sequelize, DataTypes) => {
  const MovieModel = sequelize.define('comment', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return MovieModel;
};

export { Movie };

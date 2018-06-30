/* tslint:disable variable-name */

const Comment = (sequelize, DataTypes) => {
  const CommentModel = sequelize.define('comment', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    movie: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return CommentModel;
};

export { Comment };

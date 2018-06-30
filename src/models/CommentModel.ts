/* tslint:disable variable-name */

const Comment = (sequelize, DataTypes) => {
  const CommentModel = sequelize.define('comment', {
    text: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.DATE,
    },
  });

  return CommentModel;
};

export { Comment };

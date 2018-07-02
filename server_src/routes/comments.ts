import { CommentModel } from '../models';

export const getComments = (req, res, next) => {
  let query;
  if (req.query.id) {
    query = { movie: req.query.id };
  }
  CommentModel.find(query)
    .then((comments) => {
      res.status(200).send({ comments });
    })
    .catch((err) => {
      res.status(503).send({ message: err.message });
    });
};

export const postComments = (req, res, next) => {
  if (req.body.movie && req.body.text) {
    const data = {
      text: req.body.text,
      movie: req.body.movie,
    };

    CommentModel.create(data)
      .then(() => {
        res.status(200)
          .send({ success: `comment for film: ${data.movie} posted!` });
      })
      .catch((err) => {
        res.status(503).send({ message: err.message });
      });

  } else {
    res.status(400).send({ message: 'Please post valid data!' });
  }

};

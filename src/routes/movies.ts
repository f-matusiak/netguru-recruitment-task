export const getMovies = (req, res, next) => {
  res.send({
    comments: [
      'first',
      'second',
    ],
  });
};

export const postMovies = (req, res, next) => {
  console.log(req.body);
  res.send({ success: 'comment posted!' });
};

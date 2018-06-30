export const getComments = (req, res, next) => {
  res.send({
    comments: [
      'first',
      'second',
    ],
  });
};

export const postComments = (req, res, next) => {
  console.log(req.body);
  res.send({ success: 'comment posted!' });
};

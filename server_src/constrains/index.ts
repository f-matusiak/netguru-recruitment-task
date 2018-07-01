export const PORT = process.env.PORT || 3001;

export const mongooseURI = process.env.MONGODB_URI || 'mongodb://localhost/netguru';

export const apiKey = '89200ec4';

export const seedData = {
  comments: [
    {
      movie: 'First movie',
      text: 'first comment',
    },
    {
      movie: 'First movie',
      text: 'second comment',
    },
    {
      movie: 'Second movie',
      text: 'first comment',
    },
    {
      movie: 'Second movie',
      text: 'second comment',
    },
    {
      movie: 'Second movie',
      text: 'third comment',
    },
    {
      movie: 'Third movie',
      text: 'first comment',
    },
  ],
  movies: [
    {
      title: 'first movie',
    },
    {
      title: 'second movie',
    },
    {
      title: 'third movie',
    },
  ],
};

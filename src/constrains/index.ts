export const PORT = process.env.PORT || 3001;

export const sequelizeConfig = {
  database: 'netguru-task',
  dialect: 'postgres',
  host: process.env.DATABASE_URL || 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Q@wertyuiop',
};

export const sequelizeTestConfig = {
  database: 'netguru-task-test',
  dialect: 'postgres',
  host: process.env.DATABASE_URL || 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'Q@wertyuiop',
};

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
      movie: 'First movie',
      text: 'second comment',
    },
    {
      movie: 'First movie',
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

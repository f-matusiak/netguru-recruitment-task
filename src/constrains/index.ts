export const PORT = process.env.PORT || 3001;
export const sequelizeConfig = {
  database: 'netguru-task',
  dialect: 'postgres',
  host: process.env.DATABASE_URL || 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
};

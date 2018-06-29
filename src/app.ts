import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as Sequelize from 'sequelize';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/', (req, res, next) => {
  res.send('<h1>Hello There :)</h1>');
})

app.get('*', (req, res, next) => {
  res.status(404).send('Error: Not Found');
});

export default app;
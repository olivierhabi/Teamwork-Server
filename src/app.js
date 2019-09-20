import express from 'express';
import morgan from 'morgan';
import reflection from './routes/reflection';
import auth from './routes/auth';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api version 1
app.use('/api/v1/', reflection);
app.use('/api/v1/', auth);

// app.get('/', (req, res) => {
//   res.render('Hello world');
// });
app.get('/api/v1/', (req, res) => {
  return res.status(200).send({
    status: 200,
    message: 'Welcome to Teamwork API'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;

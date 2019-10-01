import express from 'express';
import morgan from 'morgan';
import Users from './routes/users';
import Auth from './routes/auth';
import Article from './routes/articles';
import Comment from './routes/comment';
import Report from './routes/reports';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api version 1
const api = '/api/v1';
app.use(api, Users);
app.use(api, Auth);
app.use(api, Article);
app.use(api, Comment);
app.use(api, Report);

app.get(api, (req, res) => {
  return res.status(200).send({
    status: 200,
    message: 'Welcome to Teamwork API'
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;

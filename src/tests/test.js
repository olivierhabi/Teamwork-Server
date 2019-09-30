import supertest from 'supertest';
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../start';

chai.use(chaiHttp);
chai.should();
chai.expect();

describe('User', () => {
  describe('Signup', () => {
    it('User should signup', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/auth/signup')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Olivier',
          lastName: 'Habimana',
          email: 'habimana@gmaild.com',
          password: 'password1243',
          gender: 'male',
          jobRole: 'consultant',
          department: 'developer',
          address: 'kicukiro',
          isAdmin: true
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Signup', () => {
    it('User should signin', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/auth/signin')
        .set('Accept', 'application/json')
        .send({
          email: 'habimana@gmail.com',
          password: 'password1243'
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('User me', () => {
    it('User should check their info', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/me')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNTQ3ZjNmLTM4NDAtNDJjMC1iNWJjLTA4NDdiYTkwNzE3NSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyUlhsZTlwRTdBY0YxM2xSNm9PYmNlbG1PT1NwZTJpSUtpVkZWbTVZZEdzNjh1Ui9BTTE2MiIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njk4NzA2MTl9.gEijnsqptJ1QCEZ-cy3lRh6techmKEd6TwWXJUsSLMI'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Admin find All Users', () => {
    it('User should check their info', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/users')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNTQ3ZjNmLTM4NDAtNDJjMC1iNWJjLTA4NDdiYTkwNzE3NSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyUlhsZTlwRTdBY0YxM2xSNm9PYmNlbG1PT1NwZTJpSUtpVkZWbTVZZEdzNjh1Ui9BTTE2MiIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njk4NzA2MTl9.gEijnsqptJ1QCEZ-cy3lRh6techmKEd6TwWXJUsSLMI'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
});
describe('Article', () => {
  describe('Create article', () => {
    it('User should create article', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/articles')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .send({
          title: 'Hello word',
          article: 'Say hello to world again',
          tagList: ['news', 'consultant']
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Update article', () => {
    it('User should Update article', done => {
      supertest('http://localhost:3000/api/v1')
        .patch('/articles/a1263263-e788-4558-9516-4d9505030b96')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .send({
          title: 'Modified Hello word',
          article: 'Modified and Modified Say hello to world again',
          tagList: ['news', 'construction', 'Wow']
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Delete article', () => {
    it('User should Delete article', done => {
      supertest('http://localhost:3000/api/v1')
        .delete('/articles/a1263263-e788-4558-9516-4d9505030b96')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(204);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get article by Id', () => {
    it('Should Get article by id', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/articles/47aea52e-216b-470e-9b2f-659aa8fc7100')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get article by Tag', () => {
    it('Should Get article by Tag', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/articles/tag/news')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get all articles', () => {
    it('Should Get all articles', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/articles')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
});

describe('Comment', () => {
  describe('Comment to article', () => {
    it('should comment to articles', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/articles/47aea52e-216b-470e-9b2f-659aa8fc7100/comments')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .send({
          comment: 'this is awesome article dude!!'
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get comment by Id', () => {
    it('should get comment by id', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/comments/6acb9086-252e-4332-ad4c-28d15edc52df')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get all comment', () => {
    it('should get all comment', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/comments')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get comment by ArticleId', () => {
    it('should get comment by ArticleId', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/comments/comments/47aea52e-216b-470e-9b2f-659aa8fc7100')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFjOWY4OWYxLWUxZDQtNGI1Yi1hMjZlLTg4MTcyMzYxMzg5YSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRIOWxaRVlnYXVkdkpTU0c1ejlESlVPU1FzaG5EQ3RwNlRlbmEycnJOT2pUaS5ocXk4L1JTTyIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNTY5NzQ2NTE0fQ.MO03Zhc3l62VSCQCt-XUQ4TnK3V6bPllVlo3meuc-gQ'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Delete comment by Id', () => {
    it('should delete comment by Id', done => {
      supertest('http://localhost:3000/api/v1')
        .delete('/comments/6acb9086-252e-4332-ad4c-28d15edc52df')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNTQ3ZjNmLTM4NDAtNDJjMC1iNWJjLTA4NDdiYTkwNzE3NSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyUlhsZTlwRTdBY0YxM2xSNm9PYmNlbG1PT1NwZTJpSUtpVkZWbTVZZEdzNjh1Ui9BTTE2MiIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njk4NzA2MTl9.gEijnsqptJ1QCEZ-cy3lRh6techmKEd6TwWXJUsSLMI'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(204);
          res.should.be.a('object');
          done();
        });
    });
  });
});

describe('Report Article', () => {
  describe('Report article by Id', () => {
    it('should Report article by Id', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/reports/47aea52e-216b-470e-9b2f-659aa8fc7100/articles')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNTQ3ZjNmLTM4NDAtNDJjMC1iNWJjLTA4NDdiYTkwNzE3NSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyUlhsZTlwRTdBY0YxM2xSNm9PYmNlbG1PT1NwZTJpSUtpVkZWbTVZZEdzNjh1Ui9BTTE2MiIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njk4NzA2MTl9.gEijnsqptJ1QCEZ-cy3lRh6techmKEd6TwWXJUsSLMI'
        )
        .send({
          flag: 'copyright violation'
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get all flaged articles', () => {
    it('should get all flaged articles', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/reports/articles')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNTQ3ZjNmLTM4NDAtNDJjMC1iNWJjLTA4NDdiYTkwNzE3NSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyUlhsZTlwRTdBY0YxM2xSNm9PYmNlbG1PT1NwZTJpSUtpVkZWbTVZZEdzNjh1Ui9BTTE2MiIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njk4NzA2MTl9.gEijnsqptJ1QCEZ-cy3lRh6techmKEd6TwWXJUsSLMI'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get all flaged articles', () => {
    it('should get all flaged articles', done => {
      supertest('http://localhost:3000/api/v1')
        .delete('/reports/articles/1f7f07c6-6df5-4a15-9355-9ee629b80656')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNTQ3ZjNmLTM4NDAtNDJjMC1iNWJjLTA4NDdiYTkwNzE3NSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyUlhsZTlwRTdBY0YxM2xSNm9PYmNlbG1PT1NwZTJpSUtpVkZWbTVZZEdzNjh1Ui9BTTE2MiIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njk4NzA2MTl9.gEijnsqptJ1QCEZ-cy3lRh6techmKEd6TwWXJUsSLMI'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(204);
          res.should.be.a('object');
          done();
        });
    });
  });
});

describe('Report Comment', () => {
  describe('Get all Reported comment', () => {
    it('should Get all Reported comment', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/reports/comments')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkyNTQ3ZjNmLTM4NDAtNDJjMC1iNWJjLTA4NDdiYTkwNzE3NSIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyUlhsZTlwRTdBY0YxM2xSNm9PYmNlbG1PT1NwZTJpSUtpVkZWbTVZZEdzNjh1Ui9BTTE2MiIsImdlbmRlciI6Im1hbGUiLCJqb2JSb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1Njk4NzA2MTl9.gEijnsqptJ1QCEZ-cy3lRh6techmKEd6TwWXJUsSLMI'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
});

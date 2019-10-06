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
          email: 'habimana@gmail.com',
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
  describe('Sigin', () => {
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .patch('/articles/e221282d-fa52-4edf-9a87-9d243d3dd174')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .delete('/articles/e221282d-fa52-4edf-9a87-9d243d3dd174')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .get('/articles/18120e39-0b9b-45d8-9bd6-6af4c60fa7e7')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .get('/feeds')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .post('/articles/18120e39-0b9b-45d8-9bd6-6af4c60fa7e7/comments')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .get('/comments/d59a1077-3c58-43fc-9a89-27b55720ffd2')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .get('/comments/comments/18120e39-0b9b-45d8-9bd6-6af4c60fa7e7')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .delete('/comments/d59a1077-3c58-43fc-9a89-27b55720ffd2')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
        .post('/reports/18120e39-0b9b-45d8-9bd6-6af4c60fa7e7/articles')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Delete flaged articles', () => {
    it('should delete flaged articles', done => {
      supertest('http://localhost:3000/api/v1')
        .delete('/reports/articles/c2bb3e1c-17fa-47c3-8df8-21e852b1459d')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
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

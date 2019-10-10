import supertest from 'supertest';
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../start';
import data from './mochData/data';

chai.use(chaiHttp);
chai.should();
chai.expect();

const { article, articleWrong } = data;

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
        .send(article)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(201);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Fail to Create article', () => {
    it('User should fail to create article', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/articles')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
        )
        .send(articleWrong)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Update article', () => {
    it('User should Update article', done => {
      supertest('http://localhost:3000/api/v1')
        .patch('/articles/1')
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
  describe('Fail to Update article', () => {
    it('User should fail to Update article', done => {
      supertest('http://localhost:3000/api/v1')
        .patch('/articles/34')
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
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Fail to Update article', () => {
    it('User should fail to Update article', done => {
      supertest('http://localhost:3000/api/v1')
        .patch('/articles/ghjfgg')
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
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Get article by Id', () => {
    it('Should Get article by id', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/articles/1')
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
  describe('Delete article', () => {
    it('User should Delete article', done => {
      supertest('http://localhost:3000/api/v1')
        .delete('/articles/1')
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
  describe('Failed to Delete article', () => {
    it('User should fail Delete article', done => {
      supertest('http://localhost:3000/api/v1')
        .delete('/articles/109')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Failed to Delete article', () => {
    it('User should fail Delete article', done => {
      supertest('http://localhost:3000/api/v1')
        .delete('/articles/bdfgjvhn')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
        )
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
  });
});

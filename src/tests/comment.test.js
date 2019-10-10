import supertest from 'supertest';
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../start';
import data from './mochData/data';

chai.use(chaiHttp);
chai.should();
chai.expect();

const { article } = data;

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
});

describe('Comment', () => {
  describe('Comment to article', () => {
    it('should comment to articles', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/articles/2/comments')
        .set('Accept', 'application/json')
        .set(
          'x-auth-token',
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3RfbmFtZSI6Ik9saXZpZXIiLCJsYXN0X25hbWUiOiJIYWJpbWFuYSIsImVtYWlsIjoiaGFiaW1hbmFAZ21haWwuY29tcyIsInBhc3N3b3JkIjoiJDJhJDEwJEtuMklJSWQ0cVBYLlMwTFdFZFEwVWVRTnh0L05SczFZTTR3YVBOODZ3d2QxWElHcHoyOWttIiwiZ2VuZGVyIjoibWFsZSIsImpvYl9yb2xlIjoiY29uc3VsdGFudCIsImRlcGFydG1lbnQiOiJkZXZlbG9wZXIiLCJhZGRyZXNzIjoia2ljdWtpcm8iLCJpc19hZG1pbiI6dHJ1ZSwiaWF0IjoxNTcwNzA2NDUxfQ.K7CObbx4Y7MUV_t1VWHBOMQfR6FiRosZwKjTT31BJak'
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
});

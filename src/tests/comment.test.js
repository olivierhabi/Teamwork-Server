import supertest from 'supertest';
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../start';

chai.use(chaiHttp);
chai.should();
chai.expect();

describe('Comment', () => {
  describe('Comment to article', () => {
    it('should comment to articles', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/articles/a0abff7f-2adc-4394-b9de-72ee612d4c57/comments')
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
});

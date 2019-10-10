// import supertest from 'supertest';
// import chaiHttp from 'chai-http';
// import chai from 'chai';
// import app from '../start';

// chai.use(chaiHttp);
// chai.should();
// chai.expect();

// describe('Report Article', () => {
//   describe('Report article by Id', () => {
//     it('should Report article by Id', done => {
//       supertest('http://localhost:3000/api/v1')
//         .post('/reports/18120e39-0b9b-45d8-9bd6-6af4c60fa7e7/articles')
//         .set('Accept', 'application/json')
//         .set(
//           'x-auth-token',
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
//         )
//         .send({
//           flag: 'copyright violation'
//         })
//         .expect('Content-Type', /json/)
//         .end((err, res) => {
//           res.should.have.status(201);
//           res.should.be.a('object');
//           done();
//         });
//     });
//   });
//   describe('Get all flaged articles', () => {
//     it('should get all flaged articles', done => {
//       supertest('http://localhost:3000/api/v1')
//         .get('/reports/articles')
//         .set('Accept', 'application/json')
//         .set(
//           'x-auth-token',
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
//         )
//         .expect('Content-Type', /json/)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.should.be.a('object');
//           done();
//         });
//     });
//   });
//   describe('Delete flaged articles', () => {
//     it('should delete flaged articles', done => {
//       supertest('http://localhost:3000/api/v1')
//         .delete('/reports/articles/c2bb3e1c-17fa-47c3-8df8-21e852b1459d')
//         .set('Accept', 'application/json')
//         .set(
//           'x-auth-token',
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
//         )
//         .expect('Content-Type', /json/)
//         .end((err, res) => {
//           res.should.have.status(204);
//           res.should.be.a('object');
//           done();
//         });
//     });
//   });
// });

// describe('Report Comment', () => {
//   describe('Get all Reported comment', () => {
//     it('should Get all Reported comment', done => {
//       supertest('http://localhost:3000/api/v1')
//         .get('/reports/comments')
//         .set('Accept', 'application/json')
//         .set(
//           'x-auth-token',
//           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxYjY3NmNkLTlmZWYtNDlhZS04OTg4LTIxNDY5MjQzOTQ4YiIsImZpcnN0TmFtZSI6Ik9saXZpZXIiLCJsYXN0TmFtZSI6IkhhYmltYW5hIiwiZW1haWwiOiJoYWJpbWFuYUBnbWFpbC5nbWFpbCIsInBhc3N3b3JkIjoiJDJhJDEwJFhBbmk1NFNtTjJGUnpKUk1jb3NFSnVxTy5MU2RxZTVJNmVIWWloT0F5NHFITHdPejlqZkNHIiwiZ2VuZGVyIjoibWFsZSIsImpvYlJvbGUiOiJjb25zdWx0YW50IiwiZGVwYXJ0bWVudCI6ImRldmVsb3BlciIsImFkZHJlc3MiOiJraWN1a2lybyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTU3MDE3MTU0N30.HeHESyvCtKGgASmGjsvv6X28d5iZSIsIV-9hoQ59tzM'
//         )
//         .expect('Content-Type', /json/)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.should.be.a('object');
//           done();
//         });
//     });
//   });
// });

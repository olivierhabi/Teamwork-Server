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
          email: 'habimana@gmail.comyam',
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
  describe('Failed to Signup', () => {
    it('User should failed to signup', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/auth/signup')
        .set('Accept', 'application/json')
        .send({
          firstName: 'Olivier',
          lastName: 'Habimana',
          email: 'habimana@gmail.r489om',
          password: 'password1243',
          gender: 'male',
          isAdmin: true
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(404);
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
  describe('Failed to Signin', () => {
    it('User should failed to signin', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/auth/signin')
        .set('Accept', 'application/json')
        .send({
          email: 'habimana@gmail.com',
          password: 'password1278993'
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Failed to Signin invalid input', () => {
    it('User should failed to signin', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/auth/signin')
        .set('Accept', 'application/json')
        .send({
          email: 'habimana@gmail.com'
        })
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(404);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Find User by id', () => {
    it('Find User by id', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/users/bd13a854-33d7-4647-9cff-11e5a0b47a19')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('object');
          done();
        });
    });
  });
});

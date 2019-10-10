import supertest from 'supertest';
import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../start';
import data from './mochData/data';

chai.use(chaiHttp);
chai.should();
chai.expect();

const { signup, failSignup, signin, wrongPassword, wrongEmail } = data;

describe('User', () => {
  describe('Signup', () => {
    it('User should signup', done => {
      supertest('http://localhost:3000/api/v1')
        .post('/auth/signup')
        .set('Accept', 'application/json')
        .send(signup)
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
        .send(failSignup)
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
        .send(signin)
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
        .send(wrongPassword)
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
        .send(wrongEmail)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          res.should.have.status(400);
          res.should.be.a('object');
          done();
        });
    });
  });
  describe('Find User by id', () => {
    it('Find User by id', done => {
      supertest('http://localhost:3000/api/v1')
        .get('/users/1')
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

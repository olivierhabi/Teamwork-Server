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
          email: 'habimana@gmail.r489om',
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
});

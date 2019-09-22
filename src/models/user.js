import moment from 'moment';
import uuid from 'uuid';
import jwt from 'jsonwebtoken';
import config from 'config';

class Auth {
  /**
   * class construction
   * @param {object} data
   */
  constructor() {
    this.users = [];
  }

  /**
   *
   * @return {object} user object
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      gender: data.gender,
      jobRole: data.jobRole,
      department: data.department,
      address: data.address,
      isAdmin: data.isAdmin
    };
    // const genToken = {
    //   token: jwt.sign({ newUser }, config.get('jwtPrivateKey'))
    // };
    this.users.push(newUser);
    return newUser;
  }
  /**
   *
   * @param {object} user
   * @return {object} token
   */
  genToken(user) {
    const genToken = {
      token: jwt.sign({ user }, config.get('jwtPrivateKey'))
    };
    // console.log(genToken);
    return genToken;
  }
  /**
   * @param {uuid} id
   * @return {object} return object
   */
  findOne(id) {
    return this.users.find(user => user.id === id);
  }
  /**
   * @param {object} email
   * @return {object} return object
   */
  findUser(email) {
    return this.users.find(user => user.email === email);
  }

  /**
   * @params {object} password
   * @return {object} return passowrd
   */
  findPassword(password) {
    return this.users.find(user => user.password === password);
  }
}

export default new Auth();

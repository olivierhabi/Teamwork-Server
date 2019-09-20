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
    const token = jwt.sign({ newUser }, config.get('jwtPrivateKey'));
    this.users.push(token);
    return token;
  }
}

export default new Auth();

import jwt from 'jsonwebtoken';
const bcrypt = require('bcryptjs');
import '@babel/polyfill';
import config from 'config';
import _ from 'lodash';
import UserModel from '../models/user';
import hashPassword from '../helpers/hashPassword';
import validate from '../helpers/validators/loginValidator';

const Auth = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user token
   */
  async getOne(req, res) {
    const { email, password } = req.body;
    const err = validate(email, password);
    if (err) {
      return res.status(400).send({ status: 400, message: err.message });
    }
    const user = await UserModel.findUser(req.body.email);

    if (!user)
      return res
        .status(400)
        .send({ status: 400, message: 'Invalid email or password' });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res
        .status(400)
        .send({ status: 400, message: 'Invalid email or password' });

    const data = await UserModel.genToken(user);

    return res
      .status(200)
      .send({ status: 200, message: 'User is successfully logged in', data });
  }
};

module.exports = Auth;

import jwt from 'jsonwebtoken';
import config from 'config';
import _ from 'lodash';
import UserModel from '../models/user';
import hashPassword from '../helpers/hashPassword';
import userValidator from '../helpers/validators/signupValidator';

const User = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user object
   */
  async create(req, res) {
    let userEmail = await UserModel.findUser(req.body.email);
    if (userEmail)
      return res
        .status(400)
        .send({ status: 400, message: 'User already registered.' });

    let user = await UserModel.create(req.body);
    user.password = await hashPassword(user.password);

    const data = await UserModel.genToken(user);

    return res
      .status(201)
      .header('x-auth-token', data.token)
      .send({
        status: 201,
        message: 'User created successfully',
        data
      });
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user array
   */
  getOne(req, res) {
    const user = UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ status: 404, message: 'user not found' });
    }
    return res
      .status(200)
      .send({ status: 200, message: 'User found', data: user });
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  getMe(req, res) {
    const user = UserModel.findOne(req.user.id);
    if (!user) {
      return res.status(404).send({ status: 404, message: 'user not found' });
    }
    return res
      .status(200)
      .send({ status: 200, message: 'Signed in User information found', user });
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  getAll(req, res) {
    const users = UserModel.findAll();
    return res.status(200).send({ status: 200, message: 'Users found', users });
  }
};

module.exports = User;

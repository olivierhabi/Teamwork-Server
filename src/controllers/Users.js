import jwt from 'jsonwebtoken';
import config from 'config';
import _ from 'lodash';
import UserModel from '../models/User';
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
    try {
      const valid = await userValidator(req.body);

      let user = await UserModel.findUser(req.body.email);
      if (user)
        return res
          .status(400)
          .send({ status: 400, message: 'User already registered.' });

      if (valid) {
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
      }
    } catch (error) {
      return error.details
        ? res.status(404).send({ status: 404, error: error.details[0].message })
        : res.status(500).send({ status: 500, message: 'SERVER_ERROR' });
    }
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
  }
};

module.exports = User;

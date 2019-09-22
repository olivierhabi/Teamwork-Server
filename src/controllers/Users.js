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
      if (valid) {
        let user = await UserModel.create(req.body);
        if (user.password) {
          user.password = await hashPassword(user.password);
        }
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
        : res.status(500).send({ message: SERVER_ERROR });
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
      return res.status(404).send({ message: 'user not found' });
    }
    return res.status(200).send(user);
  }
};

module.exports = User;

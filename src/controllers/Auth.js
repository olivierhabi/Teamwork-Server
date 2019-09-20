import jwt from 'jsonwebtoken';
import config from 'config';
import _ from 'lodash';
import UserModel from '../models/Auth';
import hashPassword from '../helpers/hashPassword';

const Auth = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user object
   */
  async create(req, res) {
    if (!req.body.firstName && !req.body.lastName && !req.body.email) {
      return res.status(400).send({ message: 'All field are required' });
    }
    let data = await UserModel.create(req.body);
    if (data.password) {
      data.password = await hashPassword(data.password);
    }
    console.log(data);
    return res.status(201).send({
      status: 201,
      message: 'User created successfully',
      data
    });
  }
};

module.exports = Auth;

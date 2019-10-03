import _ from 'lodash';
import UserModel from '../models/user';
import hashPassword from '../helpers/hashPassword';

class User {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user object
   */
  static async create(req, res) {
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
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user array
   */
  static async getOne(req, res) {
    const user = await UserModel.findOne(req.params.id);
    if (!user) {
      return res.status(404).send({ status: 404, message: 'user not found' });
    }
    return res
      .status(200)
      .send({ status: 200, message: 'User found', data: user });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static async getMe(req, res) {
    const user = await UserModel.findOne(req.user.id);
    if (!user) {
      return res.status(404).send({ status: 404, message: 'user not found' });
    }
    return res
      .status(200)
      .send({ status: 200, message: 'Signed in User information found', user });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   */
  static async getAll(req, res) {
    const users = await UserModel.findAll();
    return res.status(200).send({ status: 200, message: 'Users found', users });
  }
}

export default User;

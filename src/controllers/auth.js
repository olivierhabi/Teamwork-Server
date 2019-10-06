import bcrypt from 'bcryptjs';
import '@babel/polyfill';
import UserModel from '../models/user';

class Auth {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user token
   */
  static async getOne(req, res) {
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
}

export default Auth;

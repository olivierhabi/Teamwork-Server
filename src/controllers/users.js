import _ from 'lodash';
import uuidv4 from 'uuid/v4';
import hashPassword from '../helpers/hashPassword';
import token from '../helpers/gentoken';

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

class User {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user object
   */
  static async create(req, res, next) {
    const password = await hashPassword(req.body.password);
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      password,
      req.body.gender,
      req.body.jobRole,
      req.body.department,
      req.body.address,
      req.body.isAdmin
    ];

    const text = `INSERT INTO users(first_name, last_name, email, password, gender, job_role, department, address, is_admin) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) returning *`;

    try {
      const { rows } = await pool.query(text, values);
      const data = await token(rows[0]);
      return res
        .status(201)
        .send({ status: 201, message: 'User created successfully', data });
    } catch (error) {
      return res.status(400).send({ status: 400, message: error.detail });
    }
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} user array
   */

  static async getOne(req, res) {
    const text = `SELECT * FROM users WHERE id = $1`;
    try {
      const { rows } = await pool.query(text, [req.params.id]);
      return res
        .status(200)
        .send({ status: 200, message: 'User found', data: rows[0] });
    } catch {
      return res.status(404).send({ message: 'User not found' });
    }
  }
}

export default User;

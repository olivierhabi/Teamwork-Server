import isValid from 'validator';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import { isForOfStatement } from '@babel/types';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

class Article {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async create(req, res) {
    const values = [
      uuidv4(),
      req.body.title,
      req.body.article,
      req.body.tagList,
      req.user.id,
      moment(new Date())
    ];

    const text = `INSERT INTO articles( id, title, article, tag_list, author_id, created_on) VALUES($1, $2, $3 ,$4, $5, $6) returning *`;

    const { rows } = await pool.query(text, values);
    const data = rows[0];
    return res.status(201).send({
      status: 201,
      message: 'article successfully created',
      data
    });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async update(req, res) {
    if (isValid.isUUID(req.params.id)) {
      const values = [
        req.body.title,
        req.body.article,
        req.body.tagList,
        moment(new Date()),
        req.params.id
      ];
      const updateOne = `UPDATE articles SET title=($1), article=($2), tag_list=($3), modified_on=($4) WHERE id=($5) returning *`;

      const response = await pool.query(updateOne, values);
      if (response.rows.length == 0) {
        return res
          .status(404)
          .send({ status: 404, message: 'article not found' });
      }
      const data = response.rows[0];
      return res
        .status(200)
        .send({ status: 200, message: 'article updated', data });
    }
    return res
      .status(404)
      .send({ status: 404, message: 'Article id not valid' });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async delete(req, res) {
    if (isValid.isUUID(req.params.id)) {
      const deleteQuery = `DELETE FROM articles WHERE id=($1) returning *`;

      const { rows } = await pool.query(deleteQuery, [req.params.id]);
      if (rows.length == 0) {
        return res
          .status(404)
          .send({ status: 404, message: 'article not found' });
      }
      return res.status(204).send({ message: 'deleted' });
    }
    return res
      .status(404)
      .send({ status: 404, message: 'Article id not valid' });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article array
   */
  static getAll(req, res) {
    pool.query(
      `SELECT * FROM articles ORDER BY created_on DESC`,
      (err, response) => {
        if (err) return console(err);

        const data = response.rows;
        return res.status(200).send({ status: 200, status: 'success', data });
      }
    );
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async getOne(req, res) {
    if (isValid.isUUID(req.params.id)) {
      const comment = `SELECT * FROM comments WHERE article_id = $1`;
      const getComment = await pool.query(comment, [req.params.id]);
      const comments = getComment.rows;

      const text = `SELECT * FROM articles WHERE id = $1`;

      const { rows } = await pool.query(text, [req.params.id]);
      if (rows.length == 0) {
        return res
          .status(404)
          .send({ status: 404, message: 'article not found' });
      }
      const data = rows[0];
      return res.status(200).send({
        status: 200,
        message: 'successfully',
        data,
        comments
      });
    }
    return res
      .status(404)
      .send({ status: 404, message: 'Article id not valid' });
  }
}

export default Article;

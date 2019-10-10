import CommentModel from '../models/comment';
import ArticleModel from '../models/article';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

class Comment {
  /**
   * @param {object} req
   * @param {object} res
   * @return {object} comment object
   */
  static async create(req, res) {
    const text = `SELECT * FROM articles WHERE id = $1`;

    const { rows } = await pool.query(text, [req.params.id]);

    console.log(rows.length);
    if (!rows) {
      return res
        .status(404)
        .send({ status: 404, message: 'article not found' });
    }

    const values = [
      uuidv4(),
      req.body.comment,
      req.user.id,
      rows[0].id,
      rows[0].title,
      moment(new Date())
    ];
    const textComment = `INSERT INTO comments( comment_id, comment, author_id, article_id, article_title, created_on) VALUES($1, $2, $3, $4, $5, $6) returning *`;

    const comment = await pool.query(textComment, values);

    const data = comment.rows[0];

    return res.status(201).send({
      status: 201,
      message: 'comment successfully created',
      data
    });
  }
  static async getOne(req, res) {
    const comment = await CommentModel.findOne(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .send({ status: 404, message: 'comment not found' });
    }
    return res.status(200).send({ status: 200, comment });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} comment array
   */
  static async getAll(req, res) {
    const comments = await CommentModel.findAll();
    return res
      .status(200)
      .send({ status: 200, messsage: 'all comment found', comments });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} comment of article
   */
  static async getSpecific(req, res) {
    const comment = await CommentModel.findSpecific(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .send({ status: 404, message: 'comment not found' });
    }
    return res.status(200).send({ status: 200, comment });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async delete(req, res) {
    const comment = await CommentModel.findOne(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .send({ status: 404, message: 'comment not found' });
    }
    if (req.user.id === comment.authorId || req.user.isAdmin) {
      const deleteComment = await CommentModel.delete(req.params.id);
      return res.status(204).send({
        status: 204,
        message: 'comment successfully deleted',
        deleteComment
      });
    } else {
      return res.status(404).send({
        status: 404,
        message: 'this is not your article'
      });
    }
  }
}
export default Comment;

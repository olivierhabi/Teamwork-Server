import uuidv4 from 'uuid/v4';
import moment from 'moment';
import isValid from 'validator';

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
    if (isValid.isUUID(req.params.id)) {
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
    return res
      .status(404)
      .send({ status: 404, message: 'Article id not valid' });
  }
}
export default Comment;

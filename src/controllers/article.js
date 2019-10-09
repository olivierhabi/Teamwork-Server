import ArticleModel from '../models/article';
import CommentModel from '../models/comment';
import arraySort from 'array-sort';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

import { Pool } from 'pg';
import dotenv from 'dotenv';

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
    const values = [
      req.body.title,
      req.body.article,
      req.body.tagList,
      moment(new Date()),
      req.params.id
    ];
    const updateOne = `UPDATE articles SET title=($1), article=($2), tag_list=($3), modified_on=($4) WHERE id=($5) returning *`;

    const response = await pool.query(updateOne, values);
    console.log(response.rows.length);
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
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async delete(req, res) {
    const deleteQuery = `DELETE FROM articles WHERE id=($1) returning *`;

    const { rows } = await pool.query(deleteQuery, [req.params.id]);
    if (rows.length == 0) {
      return res
        .status(404)
        .send({ status: 404, message: 'article not found' });
    }
    return res.status(204).send({ message: 'deleted' });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article array
   */
  static getAll(req, res) {
    const articles = ArticleModel.findAll();
    return res.status(200).send({
      status: 200,
      status: 'success',
      data: arraySort(articles, articles.createdOn).reverse()
    });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async getOne(req, res) {
    const article = await ArticleModel.findOne(req.params.id);
    if (!article) {
      return res
        .status(404)
        .send({ status: 404, message: 'article not found' });
    }
    const comments = await CommentModel.findSpecific(req.params.id);
    const data = {
      id: article.id,
      createdOn: article.createdOn,
      title: article.title,
      article: article.article,
      tagList: article.tagList,
      authorId: article.authorId,
      comments
    };
    return res.status(200).send({ status: 200, data });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async getByTag(req, res) {
    const data = await ArticleModel.findByTag(req.params.tag);
    if (data.length === 0) {
      return res.status(404).send({
        status: 404,
        message: 'article with the given tag not found'
      });
    }
    return res.status(200).send({
      status: 200,
      message: `Article with the ${req.params.tag} tag`,
      data
    });
  }
}

export default Article;

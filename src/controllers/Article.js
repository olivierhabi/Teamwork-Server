import ArticleModel from '../models/article';
import articleValidator from '../helpers/validators/articleValidator';
import { updateExpression } from '@babel/types';

const Article = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} reflection object
   */
  async create(req, res) {
    try {
      const valid = await articleValidator(req.body);
      console.log(valid);
      if (valid) {
        const data = await ArticleModel.create(req.body);
        return res.status(201).send({
          status: 201,
          message: 'article successfully created',
          data
        });
      }
    } catch (error) {
      return error.details
        ? res.status(404).send({ status: 404, error: error.details[0].message })
        : res.status(500).send({ status: 500, message: 'Server error' });
    }
  },
  async update(req, res) {
    try {
      const valid = await articleValidator(req.body);
      if (valid) {
        const article = ArticleModel.findOne(req.params.id);
        if (!article) {
          return res
            .status(404)
            .send({ status: 404, message: 'article not found' });
        }
        const data = ArticleModel.update(req.params.id, req.body);
        return res.status(200).send({
          status: 200,
          message: 'article successfully edited',
          data
        });
      }
    } catch (error) {
      return error.details
        ? res.status(404).send({ status: 404, error: error.details[0].message })
        : res.status(500).send({ status: 500, message: 'Server error' });
    }
  },
  async delete(req, res) {
    try {
      const article = await ArticleModel.findOne(req.params.id);
      if (!article) {
        return res
          .status(404)
          .send({ status: 404, message: 'article not found' });
      }
      const deleteArticle = await ArticleModel.delete(req.params.id);
      return res.status(204).send({
        status: 204,
        message: 'article successfully deleted',
        deleteArticle
      });
    } catch (error) {
      return error
        ? res.status(404).send({ status: 404, error: error })
        : res.status(500).send({ status: 500, message: 'Server error' });
    }
  }
};

export default Article;

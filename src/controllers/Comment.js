import CommentModel from '../models/Comment';
import ArticleModel from '../models/article';
import commentValidator from '../helpers/validators/commentValidator';
import { updateExpression } from '@babel/types';

const Comment = {
  /**
   * @param {object} req
   * @param {object} res
   * @return {object} comment object
   */
  async create(req, res, next) {
    try {
      const valid = await commentValidator(req.body);
      if (valid) {
        const article = await ArticleModel.findOne(req.params.id);
        if (!article) {
          return res.status(404).send({
            status: 404,
            message: 'the article you are trying to comment not found'
          });
        }

        const comment = CommentModel.create(req.body);
        res.status(201).send({
          status: 201,
          message: 'comment created successfully',
          data: {
            createdOn: comment.createdOn,
            articleTitle: article.title,
            comment: comment.comment
          }
        });
      }
    } catch (error) {
      return error.details
        ? res.status(404).send({ status: 404, error: error.details[0].message })
        : res.status(500).send({ status: 500, message: 'Server error' });
    }
    next();
  }
};

module.exports = Comment;

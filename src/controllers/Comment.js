import CommentModel from '../models/comment';
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

        const comment = await CommentModel.create(req.body);
        const data = {
          createdOn: comment.createdOn,
          articleTitle: article.title,
          comment: comment.comment,
          commentId: comment.commentId,
          authorId: req.user.id,
          articleId: req.params.id
        };
        await CommentModel.comments.push(data);

        res.status(201).send({
          status: 201,
          message: 'comment created successfully',
          data
        });
      }
    } catch (error) {
      return error.details
        ? res.status(404).send({ status: 404, error: error.details[0].message })
        : res.status(500).send({ status: 500, message: 'Server error' });
    }
    next();
  },
  async getOne(req, res) {
    // console.log(req.params.id);
    const comment = await CommentModel.findOne(req.params.id);
    // const comment = CommentModel.findOne(req.params.id);
    // console.log(comment);
    if (!comment) {
      return res
        .status(404)
        .send({ status: 404, message: 'comment not found' });
    }
    return res.status(200).send({ status: 200, comment });
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} comment array
   */
  getAll(req, res) {
    const comments = CommentModel.findAll();
    return res.status(200).send(comments);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} comment of article
   */
  getSpecific(req, res) {
    const comment = CommentModel.findSpecific(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .send({ status: 404, message: 'comment not found' });
    }
    return res.status(200).send({ status: 200, comment });
  }
};

module.exports = Comment;

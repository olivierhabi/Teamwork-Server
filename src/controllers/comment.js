import CommentModel from '../models/comment';
import ArticleModel from '../models/article';

class Comment {
  /**
   * @param {object} req
   * @param {object} res
   * @return {object} comment object
   */
  static async create(req, res) {
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

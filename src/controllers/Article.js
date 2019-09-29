import ArticleModel from '../models/article';
import CommentModel from '../models/comment';
import ReportArticle from '../models/reportArticle';
import articleValidator, {
  articleSchema
} from '../helpers/validators/articleValidator';

const Article = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  async create(req, res) {
    try {
      const valid = await articleValidator(req.body);
      if (valid) {
        const article = await ArticleModel.create(req.body);
        const data = {
          id: article.id,
          title: article.title,
          article: article.article,
          tagList: article.tagList,
          createdOn: article.createdOn,
          authorId: req.user.id
        };
        await ArticleModel.articles.push(data);

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
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
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
        if (req.user.id === article.authorId) {
          const data = ArticleModel.update(req.params.id, req.body);
          return res.status(200).send({
            status: 200,
            message: 'article successfully edited',
            data
          });
        } else {
          return res.status(404).send({
            status: 404,
            message: 'you ere not authorised to edit this article'
          });
        }
      }
    } catch (error) {
      return error.details
        ? res.status(404).send({ status: 404, error: error.details[0].message })
        : res.status(500).send({ status: 500, message: 'Server error' });
    }
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  async delete(req, res) {
    try {
      const article = await ArticleModel.findOne(req.params.id);
      if (!article) {
        return res
          .status(404)
          .send({ status: 404, message: 'article not found' });
      }
      if (req.user.id === article.authorId || req.user.isAdmin) {
        const deleteArticle = await ArticleModel.delete(req.params.id);
        const deleteComments = await CommentModel.deleteComment(req.params.id);

        return res.status(204).send({
          status: 204,
          message: 'article successfully deleted',
          deleteArticle
        });
      } else {
        return res.status(404).send({
          status: 404,
          message: 'this is not your article'
        });
      }
    } catch (error) {
      return error
        ? res.status(404).send({ status: 404, error: 'Not found' })
        : res.status(500).send({ status: 500, message: 'Server error' });
    }
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article array
   */
  getAll(req, res) {
    const articles = ArticleModel.findAll();
    return res.status(200).send(articles);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  async getOne(req, res) {
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
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  async getByTag(req, res) {
    try {
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
      // console.log(article);
    } catch (error) {
      console.log(error);
    }
  }
};

export default Article;

import ArticleModel from '../models/article';
import articleValidator from '../helpers/validators/articleValidator';
import auth from '../middleware/auth';

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
        : res.status(500).send({ message: SERVER_ERROR });
    }
  }
};

export default Article;

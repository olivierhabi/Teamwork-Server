import ReportArticle from '../models/reportArticle';
import ArticleModel from '../models/article';
import CommentModel from '../models/comment';

class Report {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} ArticleReport object
   */
  static async create(req, res) {
    const article = await ArticleModel.findOne(req.params.id);
    if (!article) {
      return res.status(404).send({
        status: 404,
        message: 'article you are trying to flag not found'
      });
    }
    const report = await ReportArticle.create(req.body);
    const data = {
      id: report.id,
      flag: report.flag,
      articleId: req.params.id,
      title: article.title,
      article: article.article,
      createdOn: report.createdOn
    };
    await ReportArticle.reports.push(data);

    return res.status(201).send({
      status: 201,
      message: 'flag successfully created',
      data
    });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} report array
   */
  static async getAll(req, res) {
    const reports = await ReportArticle.findAll();
    if (reports.length === 0) {
      res.status(200).send({ status: 200, message: 'No flaged article' });
    }
    return res
      .status(200)
      .send({ status: 200, message: 'All flaged article', reports });
  }
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  static async delete(req, res) {
    const report = await ReportArticle.findOne(req.params.id);
    if (!report) {
      return res
        .status(404)
        .send({ status: 404, message: 'article report not found' });
    }

    const article = await ArticleModel.findOne(report.articleId);
    if (!article) {
      return res
        .status(404)
        .send({ status: 404, message: 'article not found' });
    }

    await ReportArticle.delete(req.params.id);
    await ArticleModel.delete(report.articleId);
    await CommentModel.deleteComment(report.articleId);
    return res
      .status(204)
      .send({ status: 204, message: 'report deleted successfully' });
  }

  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {objetc} report object
   */
  static async getOne(req, res) {
    await ReportArticle.findOne(req.params.id);
  }
}
export default Report;

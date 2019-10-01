import ReportComment from '../models/reportComment';
import CommentModel from '../models/comment';

const Report = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} commentReport object
   */
  async create(req, res) {
    try {
      const comment = await CommentModel.findOne(req.params.id);
      if (!comment) {
        return res.status(404).send({
          status: 404,
          message: 'comment you are trying to flag not found'
        });
      }
      const report = await ReportComment.create(req.body);
      const data = {
        id: report.id,
        flag: report.flag,
        commentId: req.params.id,
        comment: comment.comment,
        createdOn: report.createdOn
      };
      await ReportComment.reports.push(data);

      return res.status(201).send({
        status: 201,
        message: 'flag successfully created',
        data
      });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} reportd comment array
   */
  async getAll(req, res) {
    try {
      const reports = await ReportComment.findAll();
      if (reports.length === 0) {
        return res
          .status(200)
          .send({ status: 200, message: 'No flaged comment' });
      }
      return res
        .status(200)
        .send({ status: 200, message: 'All flaged comment', reports });
    } catch (error) {
      console.log(error);
    }
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  async getOne(req, res) {
    const comment = await ReportComment.findOne(req.params.id);
    if (!comment) {
      return res
        .status(404)
        .send({ status: 404, message: 'reported comment not found' });
    }
    return res
      .status(200)
      .send({ status: 200, message: 'reported comment found' });
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @return {object} article object
   */
  async delete(req, res) {
    try {
      const report = ReportComment.findOne(req.params.id);
      if (!report) {
        return res
          .status(404)
          .send({ status: 404, message: 'comment report not found' });
      }
      const comment = await CommentModel.findOne(report.commentId);
      if (!comment) {
        return res
          .status(404)
          .send({ status: 404, message: 'comment not found' });
      }

      await ReportComment.delete(req.params.id);
      await CommentModel.delete(report.commentId);
      return res
        .status(204)
        .send({ status: 204, message: 'report deleted successfully' });
    } catch (error) {
      console.log(error);
    }
  }
};

export default Report;

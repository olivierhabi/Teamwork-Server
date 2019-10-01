import moment from 'moment';
import uuid from 'uuid';
import Article from '../controllers/article';

class Report {
  /**
   *
   * @param {object} data
   */
  constructor() {
    this.reports = [
      {
        id: '1f7f07c6-6df5-4a15-9355-9ee629b80656',
        flag: 'copyright violation',
        articleId: '47aea52e-216b-470e-9b2f-659aa8fc7100',
        title: 'Hello word',
        article: 'Say hello to world again',
        createdOn: '2019-09-30T20:16:44.330Z'
      }
    ];
  }
  /**
   *
   * @return {object} report object
   */
  create(data) {
    const newReport = {
      id: uuid.v4(),
      flag: data.flag,
      createdOn: moment()
    };
    return newReport;
  }
  /**
   * @returns {object} reported article array
   */
  findAll() {
    return this.reports;
  }
  /**
   * @param {object} id
   * @returns {object} report object
   */
  findOne(id) {
    return this.reports.find(report => report.id === id);
  }
  /**
   * @param {uuid} id
   */
  delete(id) {
    const report = this.findOne(id);
    const index = this.reports.indexOf(report);
    this.reports.splice(index, 1);
    return {};
  }
}

export default new Report();

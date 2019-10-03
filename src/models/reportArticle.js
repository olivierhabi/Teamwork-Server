import moment from 'moment';
import uuid from 'uuid';
import Article from '../controllers/article';

class Report {
  /**
   *
   * @param {object} data
   */
  constructor() {
    this.reports = [];
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

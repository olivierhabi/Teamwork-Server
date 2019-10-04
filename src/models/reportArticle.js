import moment from 'moment';
import uuid from 'uuid';

class Report {
  /**
   *
   * @param {object} data
   */
  constructor() {
    this.reports = [
      {
        id: 'c2bb3e1c-17fa-47c3-8df8-21e852b1459d',
        flag: 'copyright violation',
        articleId: '18120e39-0b9b-45d8-9bd6-6af4c60fa7e7',
        title: 'Hello word',
        article: 'Say hello to world again',
        createdOn: '2019-10-04T07:23:14.098Z'
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

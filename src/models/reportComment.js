import moment from 'moment';
import uuid from 'uuid';

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
   * @return {object} comment report object
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
   *
   * @return {object} reported comment array
   */
  findAll() {
    return this.reports;
  }
}

export default new Report();

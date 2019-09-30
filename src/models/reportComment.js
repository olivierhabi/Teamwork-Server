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
        id: '152b1ef7-9d7d-4000-90f5-c1ce07c7b9bd',
        flag: 'copry right violaation',
        commentId: 'bc32e108-0530-41b9-8781-7baf69ffb196',
        comment: 'this is awesome article dude!!',
        createdOn: '2019-09-30T21:14:18.103Z'
      },
      {
        id: 'b43383a3-8860-4d18-82aa-82e589babd37',
        flag: 'copry right violaation',
        commentId: 'bc32e108-0530-41b9-8781-7baf69ffb196',
        comment: 'this is awesome article dude!!',
        createdOn: '2019-09-30T21:14:19.992Z'
      }
    ];
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
  /**
   *
   * @param {object} id
   * @returns {object} article object
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

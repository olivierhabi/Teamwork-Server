import moment from 'moment';
import uuid from 'uuid';

class Comment {
  /**
   * class construction
   * @param {object} data
   */
  constructor() {
    this.comments = [];
  }
  /**
   *
   * @return {object} comment object
   */
  create(data) {
    const newComment = {
      createdOn: moment(),
      comment: data.comment,
      commentId: uuid.v4()
    };
    this.comments.push(newComment);
    return newComment;
  }
}
export default new Comment();

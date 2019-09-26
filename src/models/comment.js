import moment from 'moment';
import uuid from 'uuid';

class Comment {
  /**
   * class construction
   * @param {object} data
   */
  constructor() {
    this.comments = [];
    // console.log(this.comments);
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
    return newComment;
  }
  /**
   * @param {uuid} commentId
   * @return {object} comment object
   */
  findOne(commentId) {
    return this.comments.find(comment => comment.commentId === commentId);
  }
  /**
   * @return {object} find all comment
   */
  findAll() {
    return this.comments;
  }
  /**
   * @return {object} find all comment of specific article
   */
  findSpecific(articleId) {
    return this.comments.filter(comments => comments.articleId === articleId);
  }
}
export default new Comment();

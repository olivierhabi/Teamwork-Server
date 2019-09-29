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

  /**
   * @param {uuid} id
   */
  deleteComment(id) {
    const comments = this.comments.filter(
      comments => comments.articleId === id
    );
    this.comments.splice(0, comments.length);
    return {};
  }
  /**
   * @param {uuid} id
   */
  delete(id) {
    const comment = this.findOne(id);
    const index = this.comments.indexOf(comment);
    this.comments.splice(index, 1);
    return {};
  }
}
export default new Comment();

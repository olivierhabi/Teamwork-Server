import moment from 'moment';
import uuid from 'uuid';

class Comment {
  /**
   * class construction
   * @param {object} data
   */
  constructor() {
    this.comments = [
      {
        createdOn: '2019-09-30T19:43:15.786Z',
        articleTitle: 'Hello word',
        comment: 'this is awesome article dude!!',
        commentId: '6acb9086-252e-4332-ad4c-28d15edc52df',
        authorId: '92547f3f-3840-42c0-b5bc-0847ba907175',
        articleId: '47aea52e-216b-470e-9b2f-659aa8fc7100'
      },
      {
        createdOn: '2019-09-30T20:36:31.538Z',
        articleTitle: 'Hello word',
        comment: 'this is awesome article dude!!',
        commentId: 'bc32e108-0530-41b9-8781-7baf69ffb196',
        authorId: '92547f3f-3840-42c0-b5bc-0847ba907175',
        articleId: '19a7b0f6-94fd-43b5-8c78-c7f5414718e4'
      }
    ];
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

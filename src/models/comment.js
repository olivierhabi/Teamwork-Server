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
        createdOn: '2019-10-04T07:10:38.082Z',
        articleTitle: 'Hello word',
        comment: 'this is awesome article dude!!',
        commentId: 'd59a1077-3c58-43fc-9a89-27b55720ffd2',
        authorId: 'aa1d7e37-4c5d-482e-9565-c71ab2f92039',
        articleId: '18120e39-0b9b-45d8-9bd6-6af4c60fa7e7'
      },
      {
        createdOn: '2019-10-04T07:25:33.712Z',
        articleTitle: 'Hello word',
        comment: 'this is awesome article dude!!',
        commentId: 'a8335a69-cf99-4f00-9554-a9d570e4586f',
        authorId: 'aa1d7e37-4c5d-482e-9565-c71ab2f92039',
        articleId: '18120e39-0b9b-45d8-9bd6-6af4c60fa7e7'
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

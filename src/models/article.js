import moment from 'moment';
import uuid from 'uuid';

class Article {
  /**
   *
   * @param {object} data
   */
  constructor() {
    this.articles = [];
  }
  /**
   *
   * @return {object} reflection object
   */
  create(data) {
    const newArticle = {
      id: uuid.v4(),
      title: data.title,
      article: data.article,
      taglist: data.tagList,
      createdDate: moment(),
      modifiedDate: moment()
    };
    this.articles.push(newArticle);
    return newArticle;
  }
}

export default new Article();

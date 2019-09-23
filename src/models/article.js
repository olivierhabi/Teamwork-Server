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
      tagList: data.tagList,
      createdDate: moment(),
      modifiedDate: moment()
    };
    this.articles.push(newArticle);
    return newArticle;
  }
  /**
   *
   * @param {object} id
   * @returns {object} article object
   */
  findOne(id) {
    return this.articles.find(article => article.id === id);
  }
  /**
   *
   * @param {object} id
   * @param {object} data
   */
  update(id, data) {
    const article = this.findOne(id);
    const index = this.articles.indexOf(article);
    console.log(index);
    this.articles[index].title = data['title'];
    this.articles[index].article = data['article'];
    this.articles[index].tagList = data['tagList'];
    this.articles[index].modifiedDate = moment();
    return this.articles[index];
  }
}

export default new Article();

import moment from 'moment';
import uuid from 'uuid';

class Article {
  /**
   *
   * @param {object} data
   */
  constructor() {
    this.articles = [
      {
        id: 'e221282d-fa52-4edf-9a87-9d243d3dd174',
        title: 'Hello word',
        article: 'Say hello to world again',
        tagList: ['news', 'consultant'],
        authorId: 'd1b676cd-9fef-49ae-8988-21469243948b',
        createdOn: '2019-10-04T06:55:14.928Z'
      },
      {
        id: '18120e39-0b9b-45d8-9bd6-6af4c60fa7e7',
        title: 'Hello word',
        article: 'Say hello to world again',
        tagList: ['news', 'consultant'],
        authorId: 'd1b676cd-9fef-49ae-8988-21469243948b',
        createdOn: '2019-10-04T06:57:39.960Z'
      }
    ];
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
      modifiedDate: moment(),
      createdOn: moment()
    };
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
    this.articles[index].title = data['title'];
    this.articles[index].article = data['article'];
    this.articles[index].tagList = data['tagList'];
    this.articles[index].modifiedDate = moment();
    return this.articles[index];
  }
  /**
   * @param {uuid} id
   */
  delete(id) {
    const article = this.findOne(id);
    const index = this.articles.indexOf(article);
    this.articles.splice(index, 1);
    return {};
  }
  /**
   * @param {tag} tag
   */
  findByTag(tag) {
    try {
      const match = [];
      const article = this.articles;
      for (let i = 0; i < article.length; i++) {
        article[i].tagList.filter(tagName => {
          if (tagName === tag) {
            match.push(article[i]);
          }
        });
      }
      return match;
    } catch (error) {
      console.log(error);
    }
  }
  /**
   * @return {object} articles array
   */
  findAll() {
    return this.articles;
  }
}

export default new Article();

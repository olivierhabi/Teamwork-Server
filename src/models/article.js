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
        id: 'a1263263-e788-4558-9516-4d9505030b96',
        title: 'Hello word',
        article: 'Say hello to world again',
        tagList: ['news', 'consultant'],
        createdOn: '2019-09-30T19:25:49.121Z',
        authorId: 'ac9f89f1-e1d4-4b5b-a26e-88172361389a'
      },
      {
        id: '47aea52e-216b-470e-9b2f-659aa8fc7100',
        title: 'Hello word',
        article: 'Say hello to world again',
        tagList: ['news', 'consultant'],
        createdOn: '2019-09-30T19:35:24.954Z',
        authorId: 'ac9f89f1-e1d4-4b5b-a26e-88172361389a'
      },
      {
        id: '19a7b0f6-94fd-43b5-8c78-c7f5414718e4',
        title: 'Hello word',
        article: 'Say hello to world again',
        tagList: ['news', 'consultant'],
        createdOn: '2019-09-30T20:35:22.404Z',
        authorId: 'ac9f89f1-e1d4-4b5b-a26e-88172361389a'
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
      createdOn: moment(),
      modifiedDate: moment()
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
      // return 'bobo';
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

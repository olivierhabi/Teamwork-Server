let mock = {
  signups: {
    firstName: 'Olivier',
    lastName: 'Habimana',
    email: 'habimana@gmail.gmail',
    password: 'password1243',
    gender: 'male',
    jobRole: 'consultant',
    department: 'developer',
    isAdmin: true
  },
  signins: {
    email: 'habimana@gmail.gmail',
    password: 'password1243'
  },
  wrongPassword: {
    email: 'habimana@gmail.gmail',
    password: 'Thvbjnklnkljbhj11'
  },
  wrongAccount: {
    email: 'ydgafdgfadfteedeoicdic123@gmail.com',
    password: 'password123'
  },
  articles: {
    title: 'Hello Test word',
    article: 'Say hello to world again',
    tagList: ['news', 'consultant']
  }
};
export default mock;

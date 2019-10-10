const signup = {
  firstName: 'Olivier',
  lastName: 'Habimana',
  email: 'habimana@gmail.coms',
  password: 'password1243',
  gender: 'male',
  jobRole: 'consultant',
  department: 'developer',
  address: 'kicukiro',
  isAdmin: true
};

const failSignup = {
  firstName: 'Olivier',
  lastName: 'Habimana',
  email: 'habimana@gmail.coms',
  password: 'password1243',
  gender: 'male'
};

const signin = {
  email: 'habimana@gmail.coms',
  password: 'password1243'
};

const wrongPassword = {
  email: 'habimana@gmail.coms',
  password: 'passwordghgfh1243'
};
const wrongEmail = {
  email: 'habimana@gmail.lllcoms',
  password: 'password1243'
};

const article = {
  title: 'Hello word',
  article: 'Say hello to world again',
  tagList: ['news', 'consultant']
};
const articleWrong = {
  title: 'Hello word'
};

export default {
  failSignup,
  signup,
  signin,
  wrongPassword,
  wrongEmail,
  article,
  articleWrong
};

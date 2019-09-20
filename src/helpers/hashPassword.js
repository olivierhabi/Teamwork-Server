const bcrypt = require('bcryptjs');
import '@babel/polyfill';
module.exports = async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  //   console.log(hashed);
  return hashed;
};

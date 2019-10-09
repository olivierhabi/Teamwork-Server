import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default user => {
  const token = jwt.sign(user, process.env.PIVATE_KEY);
  return token;
};

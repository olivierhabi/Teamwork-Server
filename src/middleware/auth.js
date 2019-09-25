import jwt from 'jsonwebtoken';
import config from 'config';

module.exports = function(req, res, next) {
  const token = req.header('x-auth-token');
  if (!token)
    return res
      .status(401)
      .send({ status: 401, message: 'Acces denied. No token provided' });

  try {
    const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ status: 400, message: 'Invalid token' });
  }
};
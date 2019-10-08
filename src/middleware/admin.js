export default (req, res, next) => {
  if (!req.user.isAdmin)
    return res.status(403).send({ status: 403, message: 'Access denied' });
  next();
};

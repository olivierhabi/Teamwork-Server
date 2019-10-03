import Joi from 'joi';
import '@babel/polyfill';

const validateComment = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      comment: Joi.string()
        .trim()
        .min(3)
        .max(1024)
        .required()
    });
    const { value, error } = Joi.validate(req.body, schema);
    if (error && error.details) {
      return res
        .status(404)
        .send({ status: 404, message: error.details[0].message });
    }
    next();
  }
};

export default validateComment;

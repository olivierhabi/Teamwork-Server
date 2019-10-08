import Joi from 'joi';
import '@babel/polyfill';

export const validateArticle = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      title: Joi.string()
        .trim()
        .min(3)
        .max(1024)
        .required(),
      article: Joi.string()
        .trim()
        .min(10)
        .required(),
      tagList: Joi.array().required()
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

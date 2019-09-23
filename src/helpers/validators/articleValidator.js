import Joi from 'joi';
import '@babel/polyfill';

export const articleSchema = {
  title: Joi.string()
    .trim()
    .min(10)
    .max(200)
    .required(),
  article: Joi.string()
    .trim()
    .min(10)
    .required(),
  tagList: Joi.array().required()
};

export default (article, schema = articleSchema) =>
  Joi.validate(article, schema);

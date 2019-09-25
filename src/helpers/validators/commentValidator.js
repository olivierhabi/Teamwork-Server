import Joi from 'joi';
import '@babel/polyfill';

export const commentSchema = {
  comment: Joi.string()
    .trim()
    .min(3)
    .max(1024)
    .required()
};

export default (comment, schema = commentSchema) =>
  Joi.validate(comment, schema);

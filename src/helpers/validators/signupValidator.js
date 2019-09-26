import Joi from 'joi';
import '@babel/polyfill';

export const userSchema = {
  firstName: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .required(),
  lastName: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .required(),
  email: Joi.string()
    .trim()
    .min(3)
    .max(255)
    .required()
    .email(),
  password: Joi.string()
    .trim()
    .min(6)
    .max(255)
    .required(),
  gender: Joi.string()
    .trim()
    .min(3)
    .max(50)
    .required(),
  jobRole: Joi.string()
    .trim()
    .min(3)
    .max(255)
    .required(),
  department: Joi.string()
    .trim()
    .min(3)
    .max(255)
    .required(),
  address: Joi.string()
    .trim()
    .min(3)
    .max(255)
    .required(),
  isAdmin: Joi.boolean()
    .default(false)
    .required()
};

export default (user, schema = userSchema) => Joi.validate(user, schema);

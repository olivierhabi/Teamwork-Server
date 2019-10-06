import Joi from 'joi';
import '@babel/polyfill';

const validateId = {
  async validate(req, res, next) {
    const schema = Joi.object().keys({
      params: Joi.object({
        id: Joi.string()
          .guid()
          .required()
      })
    });
    const { value, error } = Joi.validate(req, schema);
    if (error && error.details) {
      return res
        .status(404)
        .send({ status: 404, message: error.details[0].message });
    }
    next();
  }
};

export default validateId;

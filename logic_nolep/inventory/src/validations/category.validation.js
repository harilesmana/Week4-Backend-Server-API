const Joi = require('joi');

const createCategory = Joi.object({
  name: Joi.string().required(),
});

const updateCategory = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  createCategory,
  updateCategory,
};

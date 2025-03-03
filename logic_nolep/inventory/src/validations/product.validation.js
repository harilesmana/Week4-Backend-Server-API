const Joi = require('joi');

const createProduct = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  stock: Joi.number().integer().required(),
  categoryId: Joi.number().integer().required(),
  userId: Joi.number().integer().required(),
});

const updateProduct = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  stock: Joi.number().integer(),
  categoryId: Joi.number().integer(),
  userId: Joi.number().integer(),
});

module.exports = {
  createProduct,
  updateProduct,
};

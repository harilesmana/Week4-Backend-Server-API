const Joi = require('joi');

const createOrder = Joi.object({
  userId: Joi.number().integer().required(),
  items: Joi.array().items(
    Joi.object({
      productId: Joi.number().integer().required(),
      quantity: Joi.number().integer().required(),
    })
  ).required(),
});

const updateOrder = Joi.object({
  items: Joi.array().items(
    Joi.object({
      productId: Joi.number().integer().required(),
      quantity: Joi.number().integer().required(),
    })
  ).required(),
});

module.exports = {
  createOrder,
  updateOrder,
};

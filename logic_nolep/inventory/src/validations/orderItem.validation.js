const Joi = require('joi');

const createOrderItem = Joi.object({
  productId: Joi.number().integer().required(),
  orderId: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
});

const updateOrderItem = Joi.object({
  productId: Joi.number().integer().required(),
  orderId: Joi.number().integer().required(),
  quantity: Joi.number().integer().required(),
});

module.exports = {
  createOrderItem,
  updateOrderItem,
};

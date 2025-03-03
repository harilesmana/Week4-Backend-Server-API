const express = require('express');
const orderController = require('../controllers/order.controller');
const validate = require('../middlewares/validate');
const orderValidation = require('../validations/order.validation');
const router = express.Router();

router.post('/', validate(orderValidation.createOrder), orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:orderId', orderController.getOrderById);
router.put('/:orderId', validate(orderValidation.updateOrder), orderController.updateOrder);
router.delete('/:orderId', orderController.deleteOrder);
router.get('/user/:userId', orderController.getOrdersByUser);

module.exports = router;

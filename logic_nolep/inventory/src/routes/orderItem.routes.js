const express = require('express');
const orderItemController = require('../controllers/orderItem.controller');
const validate = require('../middlewares/validate');
const orderItemValidation = require('../validations/orderItem.validation');
const router = express.Router();

router.post('/', validate(orderItemValidation.createOrderItem), orderItemController.createOrderItem);
router.get('/', orderItemController.getAllOrderItems);
router.get('/:orderItemId', orderItemController.getOrderItemById);
router.put('/:orderItemId', validate(orderItemValidation.updateOrderItem), orderItemController.updateOrderItem);
router.delete('/:orderItemId', orderItemController.deleteOrderItem);
router.get('/order/:orderId', orderItemController.getOrderItemsByOrder);

module.exports = router;

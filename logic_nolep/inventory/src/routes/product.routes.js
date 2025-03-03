const express = require('express');
const productController = require('../controllers/product.controller');
const validate = require('../middlewares/validate');
const productValidation = require('../validations/product.validation');
const router = express.Router();

router.post('/', validate(productValidation.createProduct), productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:productId', productController.getProductById);
router.put('/:productId', validate(productValidation.updateProduct), productController.updateProduct);
router.delete('/:productId', productController.deleteProduct);
router.get('/user/:userId', productController.getProductsByUser);

module.exports = router;

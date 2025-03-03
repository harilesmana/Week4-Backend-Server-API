const express = require('express');
const categoryController = require('../controllers/category.controller');
const validate = require('../middlewares/validate');
const categoryValidation = require('../validations/category.validation');
const router = express.Router();

router.post('/', validate(categoryValidation.createCategory), categoryController.createCategory);
router.get('/', categoryController.getAllCategories);
router.get('/:categoryId', categoryController.getCategoryById);
router.put('/:categoryId', validate(categoryValidation.updateCategory), categoryController.updateCategory);
router.delete('/:categoryId', categoryController.deleteCategory);

module.exports = router;

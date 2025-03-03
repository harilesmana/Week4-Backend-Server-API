const express = require('express');
const userController = require('../controllers/user.controller');
const validate = require('../middlewares/validate');
const userValidation = require('../validations/user.validation');
const router = express.Router();

router.post('/', validate(userValidation.createUser), userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.put('/:userId', validate(userValidation.updateUser), userController.updateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;

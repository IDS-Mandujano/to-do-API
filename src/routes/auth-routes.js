const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controller');

const validateSchema = require('../middlewares/validate-middlewares');
const { authSchema } = require('../schemas/auth-schema');

router.post('/register', validateSchema(authSchema), userController.createUser);
router.post('/login', validateSchema(authSchema), userController.loginUser);

module.exports = router;
const express = require('express');
const router = express.Router();

const validateSchema = require('../middlewares/validate-middlewares')
const verifyToken = require('../middlewares/auth-middleware')
const taskController = require('../controllers/task-controller');
const { createTaskSchema } = require('../schemas/task-schema')

router.post('/', verifyToken, validateSchema(createTaskSchema), taskController.createTask);

router.get('/',verifyToken, taskController.getTask);
router.get('/:id',verifyToken, taskController.getTaskById);
router.put('/:id',verifyToken, taskController.updateTask);
router.delete('/:id',verifyToken, taskController.deleteTask);

module.exports = router;
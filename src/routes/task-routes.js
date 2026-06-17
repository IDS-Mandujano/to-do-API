const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task-controller');
const validateSchema = require('../middlewares/validate-middlewares')
const { createTaskSchema } = require('../schemas/task-schema')

router.post('/',validateSchema(createTaskSchema),taskController.createTask);

router.get('/',taskController.getTask);
router.get('/:id',taskController.getTaskById);
router.put('/:id',taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
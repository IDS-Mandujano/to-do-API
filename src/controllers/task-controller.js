const Task = require("../models/Task");

let tasks = [];

const createTask = (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task(Date.now().toString(), title, description);
    
    tasks.push(newTask);
    res.status(201).json(newTask);
};

const getTask = (req, res) => {
    const { completed } = req.query;

    if (completed !== undefined) {
        const isCompleted = completed === 'true';
        return res.status(200).json(tasks.filter(t => t.completed === isCompleted));
    }

    res.status(200).json(tasks);
};

const getTaskById = (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);

    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });

    res.status(200).json(task);
};

const updateTask = (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);

    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    
    const { title, description, completed } = req.body;
    
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    res.status(200).json(task);
};

const deleteTask = (req, res) => {
    const taskIndex = tasks.findIndex(t => t.id === req.params.id);

    if (taskIndex === -1) return res.status(404).json({ error: 'Tarea no encontrada' });

    tasks.splice(taskIndex, 1);

    res.status(204).send();
};

module.exports = {
    createTask,
    getTask,
    getTaskById,
    updateTask,
    deleteTask
};
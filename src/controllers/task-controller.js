const Task = require("../models/Task")

let tasks = [];

const createTask = (req, res) => {

    try {

        const { title, description } = req.body;
        const newTask = new Task(title,description);

        tasks.push(newTask);

        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};

const getTask = (req, res) => {

    const { completed } = req.query

    if(completed !== undefined){
        const isCompleted = completed === 'true';
        const filteredTask = tasks.filter(task => task.completed === isCompleted);

        return res.status(200).json(filteredTask)
    }

    res.status(200).json(tasks)
};

const getTaskById = (req, res) => {

    const { id } = req.params;
    const taskId = id;
    const task = tasks.find(t => t.id === taskId);

    if(!task){
        return res.status(404).json({error: 'Tarea no encontrada'});
    }

    res.status(200).json(task)
};

const updateTask = (req, res) => {

    const { id } = req.params;
    const { title, description, completed } = req.body;
    const taskId = id;
    const task = tasks.find(t => t.id === taskId);

    if (!task) {
        return res.status(404).json({ error: 'Tarea no encontrada' });
    } 
    
    if (title !== undefined) {
        task.title = title;
    }
    if (description !== undefined) {
        task.description = description;
    }
    if (completed !== undefined) {
        task.completed = completed;
    }

    return res.status(200).json(task);
};

const deleteTask = (req,res) => {

    const { id } = req.params
    const taskId = id
    const task = tasks.find(t => t.id === taskId)

    if(!task){
        return res.status(404).json({error: 'Tarea no encontrada'})
    }

    tasks = tasks.filter(t => t.id !== taskId)

    return res.status(204).send()
};



module.exports = {
    createTask,
    getTask,
    getTaskById,
    updateTask,
    deleteTask
}
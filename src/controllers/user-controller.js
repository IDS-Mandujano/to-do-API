const jwt = require('jsonwebtoken');
const User = require('../models/User');

let users = [];

const createUser = (req, res) => {
    const { username, password } = req.body;

    const userExists = users.find(u => u.username === username);
    if (userExists) {
        return res.status(400).json({ error: 'Ese nombre de usuario ya está ocupado' });
    }

    const id = Date.now().toString();
    const newUser = new User(id, username, password);

    users.push(newUser);

    return res.status(201).json({ message: 'Usuario creado con éxito', userId: id });
};

const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
        { id: user.id, username: user.username }, 
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
    );

    return res.status(200).json({ 
        message: 'Login exitoso', 
        token: token 
    });
};

module.exports = {
    createUser,
    loginUser
};
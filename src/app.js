require('dotenv').config()

const express = require('express')
const taskRoutes = require('./routes/task-routes')
const authRoutes = require('./routes/auth-routes')

const app = express();

app.use(express.json());

app.use('/', authRoutes);
app.use('/tasks',taskRoutes);

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`Servidor de la API encendido y escuchando en http://localhost:${PORT}`);
})
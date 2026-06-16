const express = require('express')
const taskRoutes = require('./routes/task-routes')

const app = express();

app.use(express.json());

app.use('/tasks',taskRoutes);

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Servidor de la API encendido y escuchando en http://localhost:${PORT}`);
})
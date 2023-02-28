import express from 'express'
import mongoose from 'mongoose';

// Conectar con mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/restapis',{
    useNewUrlParser: true
})

// Crear la app del servidor
const app = express()
app.use(express.static('./build'))

// Definir el puerto y arrancar el servidor
const port = 3000;

const listenFunction = () => console.log(`El servidor esta corriendo en el puerto : ${port}`)
app.listen(port, listenFunction)


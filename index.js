import express from 'express'
import mongoose from 'mongoose';
import almacenRouter from './routes/almacenRoutes.js';
import bodyParser from 'body-parser'

// Conectar con mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/restapis',{
    useNewUrlParser: true
})

// Crear la app del servidor
const app = express()

// Renderizar react
app.use(express.static('./build'))

// Agregar body parser para recibir json por medio de url
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Agregar routes
app.use('/api', almacenRouter)



// Definir el puerto y arrancar el servidor
const port = 3000;

const listenFunction = () => console.log(`El servidor esta corriendo en el puerto : ${port}`)
app.listen(port, listenFunction)


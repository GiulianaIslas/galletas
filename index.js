import express from 'express'


const app = express()
app.use(express.static('./dist'))

const port = 3000;


const listenFunction = () => console.log(`El servidor esta corriendo en el puerto : ${port}`)
app.listen(port, listenFunction)
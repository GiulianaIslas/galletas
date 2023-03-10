import express from 'express'
import mongoose from 'mongoose'
import router from './routes/router.js'
import bodyParser from 'body-parser'
import cors from 'cors'

// Connect to mongodb
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/cookieFactory',{
    useNewUrlParser: true
})

// Create server app
const app = express()

app.use(cors())

// Enable bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Add react rendering
app.use(express.static('./build'))


// Adding routes
app.use('/api', router)

// Define port and start server
const port = 3000;

const listenFunction = () => console.log(`Server running in port : ${port}`)
app.listen(port, listenFunction)


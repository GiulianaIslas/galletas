import express from "express"

import { nuevoIngrediente } from '../controllers/almacenController.js'

const almacenRouter = express.Router()

almacenRouter.post('/almacen', nuevoIngrediente)

export default almacenRouter
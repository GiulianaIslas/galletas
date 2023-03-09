import express from "express"

import { nuevoIngrediente, obtenerIngredientes } from '../controllers/almacenController.js'

const almacenRouter = express.Router()

almacenRouter.post('/almacen/nuevoIngrediente', nuevoIngrediente)

almacenRouter.get('/almacen/obtenerIngredientes', obtenerIngredientes )

export default almacenRouter
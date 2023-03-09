import express from "express"

import { addIngredient, getIngredient } from '../controllers/warehouseController.js'

const warehouseRouter = express.Router()

warehouseRouter.post('/warehouse/addIngredient', addIngredient)

warehouseRouter.get('/warehouse/getIngredient', getIngredient )

export default warehouseRouter
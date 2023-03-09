import express from "express"

import { addIngredient } from '../controllers/warehouseController.js'
import { editRecipe, validateRecipe, deleteRecipe } from '../controllers/recipeController.js'

const router = express.Router()

router.post('/addIngredient', addIngredient)

router.get('/validateRecipe/:id', validateRecipe)

router.put('/editRecipe', editRecipe)

router.delete('/deleteRecipe/:id', deleteRecipe)

export default router
import express from "express"

import { addIngredient, getAllIngredients } from '../controllers/warehouseController.js'
import { editRecipe, validateRecipe, deleteRecipe, getAllRecipes } from '../controllers/recipeController.js'

const router = express.Router()

router.post('/addIngredient', addIngredient)

router.get('/getAllIngredients', getAllIngredients)

router.get('/validateRecipe/:id', validateRecipe)

router.get('/getAllRecipes', getAllRecipes)

router.put('/editRecipe', editRecipe)

router.delete('/deleteRecipe/:id', deleteRecipe)

export default router
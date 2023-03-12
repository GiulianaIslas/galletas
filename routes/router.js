import express from "express"

import { addIngredient, getAllIngredients, updateIngredient } from '../controllers/warehouseController.js'
import { addRecipe, validateRecipe, deleteRecipe, getAllRecipes } from '../controllers/recipeController.js'

const router = express.Router()

router.post('/addIngredient', addIngredient)

router.get('/getAllIngredients', getAllIngredients)

router.post('/updateIngredient', updateIngredient)

router.get('/validateRecipe/:name', validateRecipe)

router.get('/getAllRecipes', getAllRecipes)

router.put('/addRecipe', addRecipe)

router.delete('/deleteRecipe/:id', deleteRecipe)

export default router
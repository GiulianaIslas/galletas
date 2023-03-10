import { Recipe } from '../models/Recipe.js'

export const validateRecipe = async ( req, res ) => {
    if( !req.params.id ){
        res.sendStatus(400)
    }
    else{
        const result = await Recipe.findOne({id: req.params.id})
        if( !result ){
            res.json({exists: false})
        }
        else{
            res.json({exists: true})
        }
    }
}

export const editRecipe = async ( req, res ) => {
    console.log(req.body)
    if( !req.body.id && !req.body.ingredients ){
        res.sendStatus(400)
    }
    else{
        const exists = await Recipe.findOne( {id: req.body.id} )
        if( !exists ){
            await Recipe.create(req.body)
            res.sendStatus(200)
        }
        else{
            await Recipe.findOneAndUpdate({id: req.body.id}, req.body)
            res.sendStatus(200)
        }
    }
}

export const deleteRecipe = async( req, res ) => {
    if( !req.params.id ){
        res.sendStatus(400)
        return
    }
    else{
        await Recipe.findOneAndRemove( {id: req.params.id} )
        res.sendStatus(200)
    }
}

export const getAllRecipes = async (req, res) => {
    res.json( await Recipe.find({}).exec())
}
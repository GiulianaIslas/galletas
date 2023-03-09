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
    
}
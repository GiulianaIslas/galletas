import { Recipe } from '../models/Recipe.js'

export const validateRecipe = async ( req, res ) => {
    if( !req.params.id ){
        res.sendStatus(400)
    }
    else{
        const result = await Recipe.findOne({name: req.params.name})
        if( !result ){
            res.json({exists: false})
        }
        else{
            res.json({exists: true})
        }
    }
}

export const addRecipe = async ( req, res ) => {
    console.log(req.body)
    if( !req.body.id && !req.body.ingredients ){
        res.sendStatus(400)
    }
    else{
        const exists = await Recipe.findOne( {name: req.body.name} )
        if( !exists ){
            await Recipe.create(req.body)
            res.json({updated: true})
        }
        else{
            await Recipe.findOneAndUpdate({name: req.body.name}, req.body)
            res.sendStatus({added: true})
        }
    }
}

export const deleteRecipe = async( req, res ) => {
    if( !req.params.id ){
        res.sendStatus(400)
        return
    }
    else{
        await Recipe.findOneAndRemove( {id: req.params.name} )
        res.sendStatus(200)
    }
}

export const getAllRecipes = async (req, res) => {
    const recipes = await Recipe.find({}).exec()
    console.log(recipes)

    if( recipes.length === 0 ){
        res.json({empty: 'true'})
    }
    else{
        res.json( recipes )
    }
}
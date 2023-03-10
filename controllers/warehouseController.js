import { Warehouse } from '../models/Warehouse.js'

// Agregar nuevo ingrediente o modificar su cantidad

export const addIngredient = async (req, res) => {
    console.log(req.body)
        const ingredient = {
            name: req.body.name.toUpperCase(),
            quantity: req.body.quantity
        }
        if (!req.body.name || !req.body.quantity || !req.body.name){
            res.json({success: false})
        }
        else if ( isNaN(req.body.quantity) ) {
            res.json({success: false})
        }
        else{
            const existe = await Warehouse.findOne({name: ingredient.name}).exec()
            console.log(existe)
            if( existe ){
                console.log('existe')
                res.json({success: true})
            }
            else{
                await Warehouse.create(ingredient).then( e => console.log(e)  )
                res.json({success: true})
            }
        }
}


export const getAllIngredients = async(req, res) => {

    const ingredients = await Warehouse.find({}).exec()
    console.log(ingredients)
    res.json( ingredients )
}
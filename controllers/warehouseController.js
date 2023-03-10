import { Warehouse } from '../models/Warehouse.js'

// Agregar nuevo ingrediente o modificar su cantidad

export const addIngredient = async (req, res) => {
    console.log(req.body)
        const ingredient = {
            id: req.body.id,
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
            if( await Warehouse.findOne({name: ingredient.name}) ){
                res.json({success: true})
            }
            else{
                await Warehouse.create(ingredient).then( () => res.json({success: true}) )
            }
        }
}


export const getAllIngredients = async(req, res) => {
    res.json( await Warehouse.find({}).exec)
}
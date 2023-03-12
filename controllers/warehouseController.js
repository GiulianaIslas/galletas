import { Warehouse } from '../models/Warehouse.js'

// Agregar nuevo ingrediente o modificar su cantidad

export const addIngredient = async (req, res) => {
 
        const ingredient = {
            name: req.body.name.toUpperCase(),
            quantity: req.body.quantity
        }
        console.log(ingredient)
        if (!req.body.name || !req.body.quantity || !req.body.name){
            res.json({success: false})
        }
        else if ( isNaN(req.body.quantity) ) {
            res.json({success: false})
        }
        else{
            const existe = await Warehouse.findOne({name: ingredient.name}).exec()
            if( existe ){
                ingredient.quantity += existe.quantity
                await Warehouse.findOneAndUpdate({name: ingredient.name}, ingredient).then( () => res.json({success: true})).catch(e => console.log(e))
            }
            else{
                await Warehouse.create(ingredient).then( e => console.log(e)  )
                res.json({success: true})
            }
        }
}


export const getAllIngredients = async(req, res) => {

    const ingredients = await Warehouse.find({}).exec()
    res.json( ingredients )
}

export const updateIngredient = async(req, res) => {

    req.body.forEach( async ingredient => {
        const newIngredient = {
            name: ingredient.name.toUpperCase(),
            quantity: parseInt(ingredient.quantity)
        }

        console.log(newIngredient)
        await Warehouse.findOneAndUpdate({name: newIngredient.name}, ingredient).then( () => res.json({success: true})).catch(e => console.log(e))
        

    })
}
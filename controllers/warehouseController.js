import { Warehouse } from '../models/Warehouse.js'

// Agregar nuevo ingrediente o modificar su cantidad

export const addIngredient = async (req, res) => {
        if (!req.body.name || !req.body.quantity || !req.body.name){
            res.sendStatus(400)
        }
        else if ( isNaN(req.body.quantity) ) {
            res.sendStatus(400)
        }
        else{
            await Warehouse.create(req.body).then( () => res.sendStatus(200) )
            
        }
}

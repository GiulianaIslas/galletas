import { Almacen } from '../models/Almacen.js'

// Agregar nuevo ingrediente o modificar su cantidad

const invalidIngredient = req => isNaN(req.body.cantidad) || (req.body.ingrediente === '') ? true : false

export const nuevoIngrediente = async (req, res) => {
        !invalidIngredient(req) && await Almacen.findById( req.body.id ) && Almacen.updateOne({ _id: req.body.id }, { cantidad: req.body.cantidad } ).exec().then(res.sendStatus(200))

        !await Almacen.findById( req.body.id ) && Almacen.create(req.body).then(res.sendStatus(200))

        invalidIngredient(req) && res.sendStatus(400) 
}

export const obtenerIngredientes = async ( req, res ) => {
    // TO DO
}


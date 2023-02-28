import { Almacen } from '../models/Almacen.js'


export const nuevoIngrediente = async (req, res) => {


        if ( isNaN(req.body.id) || isNaN(req.body.cantidad) || req.body.ingrediente === '' ){
            return res.sendStatus(400)
        }
        else {
            if (!await Almacen.findOne({id: req.body.id}).exec()){
                console.log("Agregar")
                Almacen.create(
                    {
                        ingrediente: req.body.ingrediente, 
                        cantidad: req.body.cantidad
                    }
                )
            }
            return res.sendStatus(200)
        }
}




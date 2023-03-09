import mongoose from "mongoose";

const Schema = mongoose.Schema

const almacenSchema = new Schema({
    ingrediente:{
        type: String,
        trim : true
    },
    cantidad: {
        type: Number,
    }
})

export const Almacen = mongoose.model('Almacen', almacenSchema)
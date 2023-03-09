import mongoose from "mongoose";

const Schema = mongoose.Schema

const warehouseSchema = new Schema({
    ingrediente:{
        type: String,
        trim : true
    },
    cantidad: {
        type: Number,
    }
})

export const Warehouse = mongoose.model('Warehouse', warehouseSchema)
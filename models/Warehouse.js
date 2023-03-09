import mongoose from "mongoose";

const Schema = mongoose.Schema

const warehouseSchema = new Schema({
    id:{
        type: Number
    },
    name:{
        type: String,
        trim : true
    },
    quantity: {
        type: Number,
    }
})

export const Warehouse = mongoose.model('Warehouse', warehouseSchema)
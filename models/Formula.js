import mongoose  from "mongoose"

const Schema = mongoose.Schema

const formulasScheema = new Schema({
    nombreFormula:{
        type: String,
        trim: true
    },
    formula:{
        type: String,
        trim: true
    }
})

export const formulas = mongoose.model("Formula", formulasScheema)
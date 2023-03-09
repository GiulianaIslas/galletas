import mongoose  from "mongoose"

const Schema = mongoose.Schema

const recipeScheema = new Schema({
    id:{
        type: String,
        trim: true
    },
    name:{
        type: String,
        trim: true
    },
    ingredients:{
        type: Array
    }
})

export const Recipe = mongoose.model("Formula", recipeScheema)
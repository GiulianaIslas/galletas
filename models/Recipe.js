import mongoose  from "mongoose"

const Schema = mongoose.Schema

const recipeScheema = new Schema({
    id:{
        type: Number,
        trim: true
    },
    name:{
        type: String,
        trim: true
    },
    ingredients:{
        type: 
            [
                {
                    quantity: {
                        type: Number
                    },
                    id: {
                        type: Number
                    }
                }
            ]
    }
})

export const Recipe = mongoose.model("Recipes", recipeScheema)
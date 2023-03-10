import mongoose  from "mongoose"

const Schema = mongoose.Schema

const recipeScheema = new Schema({

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
                    name: {
                        type: String
                    }
                }
            ]
    }
})

export const Recipe = mongoose.model("Recipes", recipeScheema)
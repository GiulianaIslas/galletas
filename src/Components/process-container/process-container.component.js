import Button from "../button/button.component.js";
import './process-container.styles.scss'
import IngredientStorage from "../Ingredient-storage/ingredient-storage.component.js";
import { useState, useEffect } from "react";


const ProcessContainer = () => {

    const [ recipes, setRecipes ] = useState([])
    const [ ingredients, setIngredients ] = useState([])
    const [ recipe, setRecipe ] = useState('')
    const [ message, setMessage ] = useState('')
    const getIngredients = async() =>{
        await fetch("http://localhost:3000/api/getAllingredients")
        .then( response => response.json())
        .then( json =>{
            setIngredients(json)
        })

    }

    const getRecipes = async() => {
        await fetch("http://localhost:3000/api/getAllRecipes")
        .then( response => response.json())
        .then( json => {
            console.log(json)
            setRecipes(json)
        })
    }

    const checkIngredients = () => {
        
        const recipeIngredients = recipes.filter( rec => rec.name === recipe )
        const ingredientsRequired = recipeIngredients[0].ingredients
        let oneUnavailable = false
        ingredientsRequired.forEach( ingr => {
            ingredients.forEach( element => {
                if( element.name === ingr.name && parseInt(element.quantity) <= parseInt(ingr.quantity) ){
                    oneUnavailable = true
                }

            })

        })
        if( !oneUnavailable ){
            setMessage('INGREDIENTES INSUFICIENTES')
        }
        else{
            setMessage('INGREDIENTES SUFICIENTES')
        }
    }

    useEffect( () => {
        getIngredients()
        getRecipes()
    }, [])

    useEffect( () => {
        if( recipe !== '' ){
            checkIngredients()
        }
    }, [recipe])

    return(
        <div className='process-container'>

            <div>
                <label>
                    Selecciona la receta a fabricar:
                </label>
                <select onChange={ e => setRecipe(e.target.value)}>
                    <option value={''}>-------</option>
                        { recipes.length ? (
                            recipes.map( e => (
                                <option value={e.name}>{e.name}</option>
                            ))
                        )
                        : ''
                        }
                </select>
            </div>
            <div>
                        { ingredients.length ? (
                            ingredients.map( e => (
                                <p>Ingrediente:{e.name} Cantidad disponible:{e.quantity}</p>
                            ))
                        )
                        : ''
                        }
            </div>
            <div>
                { message && <p>{message}</p>}
            </div>
            <div className='row'>
                <Button buttonType='light' type='button'>Iniciar Amasado</Button>
                <div className='amasador'>3.AMASADOR</div>
                <div className='column-container'>
                    <div className='balanza'>1.BALANZA</div>
                    <div className='deposito'>2.DEPOSITO</div>
                </div>
                <Button buttonType='light' type='button'>Iniciar a Pesar</Button>
            </div>
            <div className='row'>
                <div className='molde'>4.MOLDE</div>
                <div className='horno'>5.HORNO</div>
                <Button buttonType='light' type='button'>Iniciar Horneado</Button>
            </div>
        </div>
    )
}

export default ProcessContainer
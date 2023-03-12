import Button from "../button/button.component.js";
import './process-container.styles.scss'
import IngredientStorage from "../Ingredient-storage/ingredient-storage.component.js";
import { useState, useEffect } from "react";


const ProcessContainer = () => {

    const [ recipes, setRecipes ] = useState([])
    const [ ingredients, setIngredients ] = useState([])
    const [ recipe, setRecipe ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ cantidad, setCantidad ] = useState(1)
    const [ recipeCanBeDone, setRecipeCanBeDone ] = useState(false)

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
            setRecipes(json)
        })
    }

    const checkIngredients = () => {
        
        const actualRecipe = recipes.filter( rec => rec.name === recipe )
        const recipeIngredients = actualRecipe[0].ingredients

        let ingredientExists = false
        let enoughIngredients = false

        recipeIngredients.forEach( requiredIngredient => {
                
                for(let i = 0; i < ingredients.length; i++ ){
                    if( requiredIngredient.name === ingredients[i].name ){
                        ingredientExists = true 

                        if( (requiredIngredient.quantity*cantidad) <= ingredients[i].quantity ){
                            enoughIngredients = true
                        }

                        break
                    }
                   
                }

        })

        if( ingredientExists && enoughIngredients ){
            setMessage('INGREDIENTES SUFICIENTES')
            setRecipeCanBeDone( true )
        }
        else{
            setMessage('INGREDIENTES INSUFICIENTES')
            setRecipeCanBeDone( false )
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
    }, [recipe,  cantidad])

    return(
        <div className='process-container'>
            <div className="process">

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
            <div className="recetas">
                <div className="formulario-receta">
                    <label >
                        Selecciona la receta a fabricar:
                    </label>
                    <select onChange={ e => setRecipe(e.target.value)}>
                        <option value={''}>-------</option>
                            { recipes.length ? (
                                recipes.map( e => (
                                    <option key={e._id} value={e.name}>{e.name}</option>
                                ))
                            )
                            : ''
                            }
                    </select>
                    <div className="formulario-receta-cantidad">
                        <label>Cantidad</label>
                        <input type="number" min={1} value={cantidad} onChange={e => setCantidad(e.target.value)}></input>
                    </div>
                </div>

                <p>Ingredientes disponibles</p>

                <div className="ingredientes-div">
                            { ingredients.length ? (
                                ingredients.map( e => (
                                    <p key={e._id}>  <span className="ingredientes-span">{e.name}  </span> Cantidad disponible:{e.quantity}</p>
                                ))
                            )
                            : ''
                            }
                </div>
                <div>
                    { message && <p className="message">{message}</p>}
                </div>
            </div>
            
        </div>
    )
}

export default ProcessContainer
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
    const [ stage, setStage ]  = useState(0)
    const [ stageMessage, setStageMessage ] = useState('Listo!')
    const [ stageCondition, setStageCondition ] = useState(true)

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

    const weight = async e => {
        e.preventDefault()
        if( recipeCanBeDone ){

            const actualRecipe = recipes.filter( rec => rec.name === recipe )
            const recipeIngredients = actualRecipe[0].ingredients

            let newIngredients = []
    
            recipeIngredients.forEach( requiredIngredient => {
                for(let i = 0; i < ingredients.length; i++ ){
                    if( requiredIngredient.name === ingredients[i].name ){
                        const newIngredient = {
                            name: ingredients[i].name,
                            quantity: ingredients[i].quantity - cantidad
                        }
                        newIngredients = [...newIngredients, newIngredient]
                    }
                }
            })
           
            console.log(newIngredients)
            await fetch( "http://localhost:3000/api/updateIngredient", {
                method: 'POST',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(newIngredients)

            })
            .then( e => e.json())
            .then( e => console.log(e))
            .catch( e => console.log(e))
            
            getIngredients()
            setStageCondition(false)
            setStageMessage('Pesando...')
            setTimeout( () =>{
                setStage(2)
                setStageMessage('Listo!')
                setStageCondition(true)
            }, 3000)
        }
    }

    const amasar = () => {
        if( stage === 2 ){
            setStageMessage('Amasando...')
            setStageCondition(false)
            setTimeout( () =>{
                setStage(3)
                setStageMessage('Listo!')
                setStageCondition(true)
            }, 3000)
        }
    }

    const moldear = () => {
        if( stage === 3 ){
            setStageMessage('Moldeando...')
            setStageCondition(false)
            setTimeout( () =>{
                setStage(4)
                setStageMessage('Listo!')
                setStageCondition(true)
            }, 3000)
        }
    }

    const hornear = () => {
        if( stage === 4 ){
            setStageMessage('Horneando...')
            setStageCondition(false)
            setTimeout( () =>{
                setStage(5)
                setStageMessage('Listo!')
                setStageCondition(true)
            }, 3000)
        }
    }

    useEffect( () => {
        getIngredients()
        getRecipes()
    }, [])

    useEffect( () => {
        if( recipe !== '' ){
            checkIngredients()
            setStage(1)
        }
    }, [recipe,  cantidad])

    useEffect( () => {
        if( recipeCanBeDone ){
            setStage(1)
        }
        else{
            setStage(0)
        }
    }, [recipeCanBeDone])

    return(
        <div className='process-container'>
            <div className="process">
                <div>
                    { stageCondition ? <p className="stageMessage ready"><span>Status:</span> {stageMessage}</p> : <p className="stageMessage waiting"><span>Status: </span> {stageMessage}</p> }
                </div>
                <div className='row'>
                   <button className={stage > 1 ? '' : 'disabled'} onClick={ e => amasar(e) }>2.Amasar</button>
                    <div className='amasador'>3.AMASADOR</div>
                    <div className='column-container'>
                        <div className='balanza'>1.BALANZA</div>
                        <div className='deposito'>2.DEPOSITO</div>
                    </div>
                    <button className={stage > 0 ? '' : 'disabled'} onClick={ e => weight(e)}>1.Pesar</button>
                 
                </div>
                <div className='row'>
                    <button className={stage > 2 ? '' : 'disabled'} onClick={e => moldear(e)} >3.Moldear</button>
                    <div className='molde'>4.MOLDE</div>
                    <div className='horno'>5.HORNO</div>
                    <button className={stage > 3 ? '' : 'disabled'} onClick={e => hornear(e)}>4.Hornear</button>
                </div>
                <div>
                    { stage === 5 ? <p className="simulationResult">Usted ha preparado {cantidad} {recipe} exitosamente!</p> : ''}
                </div>

            </div>
            <div className="recetas">
                <div className="formulario-receta">
                    <div className="formulario-receta-contenedor">
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
                    </div>
                    <div className="formulario-receta-cantidad">
                        <label>Cantidad</label>
                        <input type="number" min={1} value={cantidad} onChange={e => setCantidad(e.target.value)}></input>
                    </div>
                </div>

                <p>Ingredientes disponibles</p>

                <div className="ingredientes-div">
                            { ingredients.length ? (
                                ingredients.map( e => (
                                    <p className="ingrediente" key={e._id}>  <span className="ingredientes-span">{e.name}  </span> Cantidad disponible: {e.quantity}</p>
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
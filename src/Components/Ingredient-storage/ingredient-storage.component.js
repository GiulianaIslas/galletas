import './ingredient-storage.styles.scss'
import {useState, useEffect} from "react";


const IngredientStorage = () => {
    const [ ingredients, setIngredients ] = useState([])

    useEffect( () => {
        const getIngredients = async() => {
            await fetch("http://localhost:3000/api/getAllIngredients")
            .then( response => response.json() )
            .then( json => setIngredients(json) )
        } 
        getIngredients()
    }, [])

    const renderList = ingredients.map(({name,quantity})=>
        (quantity>0 && <div key={Math.random() * Date.now()} className='ingredient-storage'>{name.toUpperCase()}</div>)
    );
    return (
        <div className='ingredient-storage-container'>
            {renderList}
        </div>
    );
}

export default IngredientStorage
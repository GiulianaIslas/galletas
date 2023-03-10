import './ingredient-storage.styles.scss'
import {useState} from "react";
const IngredientStorage = () => {
    ////GET INGREDIENT LIST
    /*const [fetch,setFetch] =useState();
     fetch ('../../Data/ingredients.json')
        .then((data)=>{data.json()})
        .then(data=> {
            setFetch(JSON.parse(data));
        })
        .then(data=>console.log(fetch));
*/
    const renderList = fetch.map(({name,id,quantity})=>
        (quantity>0 && <div key={id} className='ingredient-storage'>{name.toUpperCase()}</div>)
    );
    return (
        <div className='ingredient-storage-container'>
            {renderList}
        </div>
    );
}

export default IngredientStorage
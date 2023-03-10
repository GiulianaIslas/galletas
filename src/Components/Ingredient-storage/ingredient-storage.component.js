import './ingredient-storage.styles.scss'
const IngredientStorage = () => {
    ////GET INGREDIENT LIST
    const fetchIngredients = async () => {
        await fetch ('http://localhost:3000/api/getAllIngredients')
            .then((data)=>{return data.json()});
    }
    const ingredients = fetchIngredients();

    const renderList = ingredients.map(({name,id,quantity})=>
        (quantity>0 && <div key={id} className='ingredient-storage'>{name.toUpperCase()}</div>)
    );
    return (
        <div className='ingredient-storage-container'>
            {renderList}
        </div>
    );
}

export default IngredientStorage
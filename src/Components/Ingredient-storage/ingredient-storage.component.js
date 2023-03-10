import './ingredient-storage.styles.scss'
const IngredientStorage = () => {
    ////GET INGREDIENT LIST
    const ingredients = [
        {
            id:74529,
            name:'harina',
            quantity:'5',
        },
        {
            id:45254,
            name:'azucar',
            quantity:'8',
        },
        {
            id:48675,
            name:'chispas',
            quantity:'10',
        },
        {
            id:78549,
            name:'mantequilla',
            quantity:'8',
        },
    ];

    const renderList = ingredients.map(({name,id})=>
        <div key={id} className='ingredient-storage'>{name}</div>
    );
    return (
        <div className='ingredient-storage-container'>
            {renderList}
        </div>
    );
}

export default IngredientStorage
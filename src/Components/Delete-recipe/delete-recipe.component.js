import {useState} from "react";
import Select from "react-select";
import Button from "../button/button.component.js";
import './delete-recipe.styles.scss';

const DeleteRecipe = () => {
    //////ENDPOINT GET recipeList
    const recipes = [
        {
            id:574221324,
            name:'chispas',
        },
        {
            id:458621754,
            name:'mantequilla',
        },
        {
            id:789357841,
            name:'chocolate',
        }
    ];
    const defaultRecipe = {
        id:'',
    };
    const [recipe,setRecipe] = useState(defaultRecipe);
    const {id} = recipe;
    const [index,setIndex] = useState(0);
    const handleSelectChange = ({value}) => {
        setRecipe({...recipe,['id']:value});
    }

    const handleClick = () => {
        setIndex(0);
        setRecipe(defaultRecipe);
    }
    const submitData = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(recipe));
        setIndex(1);
    }

    if(index===0)
        return(
            <div className='delete-container'>
                <h2 >Eliminar Receta</h2>
                <form onSubmit={submitData} className='delete-form-container'>
                    <div className='select'>
                        <Select onChange={handleSelectChange} options={recipes.map(sup => ({label:sup.name,value:sup.id}))}/>
                    </div>
                    <Button buttonType='dark' type='submit'>ACEPTAR</Button>
                </form>
            </div>
        );
    if(index===1)
        return(
            <div className='delete-container'>
                <h2 >Eliminar Receta</h2>
                <p>La receta fue eliminada exitosamente del inventario. </p>
                <Button type='button'  buttonType='dark' onClick={handleClick}>REGRESAR</Button>
            </div>
        );
}

export default DeleteRecipe
import {useState} from "react";
import Select from "react-select";
import Button from "../button/button.component.js";
import './delete-recipe.styles.scss';

const DeleteRecipe = () => {
    //////ENDPOINT GET recipeList
    const fetchRecipes = async () =>{
        await fetch ('http://localhost:3000/api/getAllRecipes')
            .then((data)=>{return data.json()});
    };
    const options = fetchRecipes();

    const defaultRecipe = {
        id:'',
    };
    const [recipe,setRecipe] = useState(defaultRecipe);
    const {id} = recipe;
    const [index,setIndex] = useState(0);
    const [success,setSuccess] = useState(false);
    const handleSelectChange = ({value}) => {
        setRecipe({...recipe,['id']:value});
    }

    const handleClick = () => {
        setIndex(0);
        setRecipe(defaultRecipe);
    }
    const submitData = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/api/deleteRecipe/${id}`,{
            method: "DELETE",
        }).then(response=>response.json())
            .then(json=> console.log(json))
            .then(()=> setSuccess(true));
        setIndex(1);
    }

    if(index===0)
        return(
            <div className='delete-container'>
                <h2 >Eliminar Receta</h2>
                <form onSubmit={submitData} className='delete-form-container'>
                    <div className='select'>
                        <Select onChange={handleSelectChange} options={options.map(sup => ({label:sup.name,value:sup.id}))}/>
                    </div>
                    <Button buttonType='dark' type='submit'>ACEPTAR</Button>
                </form>
            </div>
        );
    if(index===1 && success)
        return(
            <div className='delete-container'>
                <h2 >Eliminar Receta</h2>
                <p>La receta fue eliminada exitosamente del inventario. </p>
                <Button type='button'  buttonType='dark' onClick={handleClick}>REGRESAR</Button>
            </div>
        );
    if (index===1 && !success)
        return(
            <div className='delete-container'>
                <h2 >Error!</h2>
                <p>La receta no fue eliminada exitosamente del inventario. </p>
                <Button type='button'  buttonType='dark' onClick={handleClick}>REGRESAR</Button>
            </div>
        );
}

export default DeleteRecipe
import {useEffect, useState} from "react";
import Select from "react-select";
import Button from "../button/button.component.js";
import './delete-recipe.styles.scss';

const DeleteRecipe = () => {
    const [recipe,setRecipe] = useState('');
    const {name} = recipe;
    const [index,setIndex] = useState(0);
    const [success,setSuccess] = useState(false);
    const [recipes,setRecipes] = useState([{name:'',quantity:''}]);

    useEffect(()=>{
        const url = "http://localhost:3000/api/getAllRecipes";
        const fetchData = async() => {
            await fetch(url)
                .then( response => response.json() )
                .then( json => setRecipes(json))
                .catch( e => console.log(e) )
        }
        fetchData();
    },[]);

    const handleSelectChange = ({value}) => {
        setRecipe(value);
    }

    const handleClick = () => {
        setIndex(0);
        setRecipe('');
    }
    const submitData = (event) => {
        event.preventDefault();
        const sendData = async() => {
            await fetch(`http://localhost:3000/api/deleteRecipe/${name}`, {
                method:"DELETE",
            })
                .then(response => {
                    console.log(response);
                    setSuccess(true);
                    setIndex(1);
                })
                .catch( e => console.log(e));
        }
        sendData();
    }
    if(index===0)
        return(
            <div className='delete-container'>
                <h2 >Eliminar Receta</h2>
                <form onSubmit={submitData} className='delete-form-container'>
                    <div className='select'>
                        <Select onChange={handleSelectChange} options={recipes.length && recipes.map(sup => ({label:sup.name,value:sup.name}))}/>
                    </div>
                    <Button buttonType='dark' type='submit'>ACEPTAR</Button>
                </form>
            </div>
        );
    if(index===1 && success)
        return(
            <div className='delete-container'>
                <h2 >Eliminar Receta</h2>
                <p>La receta fue eliminada exitosamente del inventario.</p>
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
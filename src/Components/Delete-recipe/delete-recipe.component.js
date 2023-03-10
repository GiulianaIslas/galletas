import {useEffect, useState} from "react";
import Select from "react-select";
import Button from "../button/button.component.js";
import './delete-recipe.styles.scss';

const DeleteRecipe = () => {
    //////ENDPOINT GET recipeList
    const recipes =
        [
            {
                "id": 74529,
                "name": "chispas",
                "ingredients": [
                    {
                        "id": 45254,
                        "name": "azucar",
                        "quantity": 3
                    },
                    {
                        "id":87512,
                        "name": "chispas",
                        "quantity": 3
                    }
                ]
            },
            {
                "id": 45254,
                "name": "mantequilla",
                "ingredients": [
                    {
                        "id": 45254,
                        "name": "azucar",
                        "quantity": 3
                    },
                    {
                        "id":87512,
                        "name": "harina",
                        "quantity": 3
                    }
                ]
            },
            {
                "id": 45768,
                "name": "chocolate",
                "ingredients": [
                    {
                        "id": 45254,
                        "name": "azucar",
                        "quantity": 3
                    },
                    {
                        "id":87512,
                        "name": "harina",
                        "quantity": 3
                    }
                ]
            }
        ];

    const defaultRecipe = {
        id:'',
    };
    const [recipe,setRecipe] = useState(defaultRecipe);
    const {id} = recipe;
    const [index,setIndex] = useState(0);
    const [success,setSuccess] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    //const [fetch,setFetch] =useState(null);

    /*
    useEffect(()=>{
        fetch ('../../Data/recipes.json')
            .then((data)=>{data.json()})
            .then(data=> {
                setFetch(JSON.parse(data));
                setIsLoading(false);
                console.log(fetch);
            })
    },[]);
    */
    const handleSelectChange = ({value}) => {
        setRecipe({...recipe,['id']:value});
    }

    const handleClick = () => {
        setIndex(0);
        setRecipe(defaultRecipe);
    }
    const submitData = (event) => {
        event.preventDefault();
        /*
        fetch(`http://localhost:3000/api/deleteRecipe/${id}`,{
            method: "DELETE",
        }).then(response=>response.json())
            .then(json=> console.log(json))
            .then(()=> setSuccess(true));

         */
        setSuccess(true);
        setIndex(1);
    }
    if(index===0 && isLoading)
        return(
            <div className='delete-container'>
                <h2 >Eliminar Receta</h2>
                <p>Cargando...</p>
            </div>
        )

    if(index===0 && !isLoading)
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
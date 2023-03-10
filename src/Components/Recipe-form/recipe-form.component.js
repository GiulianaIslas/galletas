import {useEffect, useState} from "react";
import FormInput from "../Form-input/form-input.component.js";
import Button from "../button/button.component.js";
import './recipe-form.styles.scss';
import Select from 'react-select';
const RecipeForm = () => {
    const defaultFormFields = {
        id:'',
        name:'',
        ingredients:[],
    }

    //state
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {name,id} = formFields;
    const [quantity,setQuantity] = useState('');
    const [ingredient,setIngredient] =useState('');
    const [index,setIndex] = useState(0);
    const [ ingredients, setIngredients ]  = useState([])

    useEffect(()=>{
        const url = "http://localhost:3000/api/getAllIngredients";

        const fetchData = async() => {
            await fetch(url)
            .then( response => response.json() )
            .then( json => setIngredients(json))
            .catch( e => console.log(e) )
        }
        fetchData()
    },[]);
      

    //handlers
    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value.toLowerCase()})

    }
    const handleSelectChange = ({value}) => {
        setIngredient(value);
        console.log(ingredient);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.valueAsNumber);
        console.log(quantity);
    }

    const handleClick = () => {
        setIndex(0);
        setFormFields(defaultFormFields);
    }

    const submitIngredient = (event) => {
        event.preventDefault();
        formFields.ingredients.push({ingredient_id:ingredient,quantity:quantity});
        setIngredient('');
        setQuantity('');
        alert('Ingrediente agregado exitosamente a la receta');
    }
    const submitData = (event) => {
        submitIngredient(event);
        event.preventDefault();
        const id=Math.random()*100000000;
        formFields.id=Math.round(id);
        const sendData = async() => {
            await fetch(url, {
                method:"PUT",
                body:JSON.stringify(formFields),
            })
            .catch( e => console.log(e));
        }
        sendData();
        console.log(formFields);
        setIndex(1);
    }


    if (index === 0 && !isLoading)
        return(
            <div className='recipe-container'>
                <h2 >Editar o Agregar Receta</h2>
                <form onSubmit={submitData} className='input-container'>
                    <FormInput label='Nombre' required type='text' onChange={handleChange} name='name' value={name}/>
                    <h3>Agrega los ingredientes</h3>
                    <span>Presiona +INGREDIENTE cuando sean correctos los datos del ingrediente actual y quiereas agregar otro, cuando finalices de agregar ingredientes presiona TERMINAR.</span>
                    <div className='ingredients-container'>
                        <label className='label'>Ingrediente</label>
                            <div className='select-recipe'>
                                <Select onChange={handleSelectChange} options={ingredients.map(op => ({label:op.name.toLowerCase(),value:op.id}))}/>
                            </div>
                        <label className='label'>Cant.<input className='input' required type='number' onChange={handleQuantityChange} name='quantity' value={quantity}/></label>
                    </div>
                    <div className='buttons-container'>
                        <Button buttonType='light' type='button' onClick={submitIngredient}>+INGREDIENTE</Button>
                        <Button  buttonType='dark' type='submit'>TERMINAR</Button>
                    </div>

                </form>
            </div>
        );

    if (index===1)
        return (
            <div className='recipe-container'>
                <h2 >Receta Editada!</h2>
                <p>La receta <em>{name.toUpperCase()}</em> fue editada exitosamente en el inventario. </p>
                <Button type='button'  buttonType='dark' onClick={handleClick}>REGRESAR</Button>
            </div>
        )
}

export default RecipeForm
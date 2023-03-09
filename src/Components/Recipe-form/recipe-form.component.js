import {useState} from "react";
import FormInput from "../Form-input/form-input.component.js";
import Button from "../button/button.component.js";
import './recipe-form.styles.scss';
import Select from 'react-select';

const RecipeForm = () => {
    const defaultFormFields = {
        name:'',
        ingredients:[],
    }

    //////////ENDPOINT getIngredientList
    const ingredients = [
        {
            id:74529,
            name:'harina',
            quantity:'3',
        },
        {
            id:45254,
            name:'azucar',
            quantity:'8',
        }
    ]
    //state
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {name} = formFields;
    const [quantity,setQuantity] = useState('');
    const [ingredient,setIngredient] =useState('');
    const [index,setIndex] = useState(0);

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
        setQuantity(event.target.value);
        console.log(quantity);
    }

    const handleClick = () => {
        setIndex(0);
        setFormFields(defaultFormFields);
    }

    ///////ENDPOINT: editRecipe(json)
    const submitIngredient = (event) => {
        event.preventDefault();
        formFields.ingredients.push({ingredient_id:ingredient,quantity:quantity});
        console.log(JSON.stringify(formFields));
        setIngredient('');
        setQuantity('');
    }
    const submitData = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formFields));
        setIndex(1);
    }


    if (index === 0)
        return(
            <div className='recipe-container'>
                <h2 >Editar o Agregar Receta</h2>
                <form onSubmit={submitData} className='input-container'>
                    <FormInput label='Nombre' required type='text' onChange={handleChange} name='name' value={name}/>
                    <div className='ingredients-container'>
                        <Select className='select' onChange={handleSelectChange} options={ingredients.map(sup => ({label:sup.name,value:sup.id}))}/>
                        <label className='label'>Cant.<input className='input' required type='number' onChange={handleQuantityChange} name='quantity' value={quantity}/></label>
                    </div>
                    <Button buttonType='light' type='button' onClick={submitIngredient}>Confirmar ingrediente</Button>
                    <Button  buttonType='dark' type='submit'>SIGUIENTE</Button>
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
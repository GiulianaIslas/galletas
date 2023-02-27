import {useState} from "react";
import FormInput from "../Form-input/form-input.component.js";
import Button from "../button/button.component.js";
import './ingredient-form.styles.scss';
const IngredientForm = () =>{
    const defaultFormFields = {
        quantity:'',
        name:'',
    }
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {quantity,name } = formFields;

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})
    }
    return(
        <div className='ingredient-container'>
            <h2>Ingredientes</h2>
            <form>
                <FormInput label='Cantidad' required type='number' onChange={handleChange} name='quantity' value={quantity} />
                <FormInput label='Nombre' required type='text' onChange={handleChange} name='name' value={name} />
                <Button buttonType='dark'>Aceptar</Button>
            </form>
        </div>
    );
}
export default IngredientForm
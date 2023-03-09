import {useState} from "react";
import FormInput from "../Form-input/form-input.component.js";
import Button from "../button/button.component.js";
import './ingredient-form.styles.scss';
const IngredientForm = () =>{
    const defaultFormFields = {
        id:'',
        name:'',
        quantity:'',
    }
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {id,name,quantity } = formFields;

    const [containerIndex, setContainerIndex] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        const id=Math.random()*100000000;
        formFields.id=Math.round(id);
        setFormFields({...formFields,[name]:value.toLowerCase()});
    }

    ///////////////ENDPOINT: addIngredient(json)
    const sumbitData = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formFields));
        setContainerIndex(1);
    }

    const handleClick = () => {
        setContainerIndex(0);
        setFormFields(defaultFormFields);
    }

    if (containerIndex===0)
        return(
            <div className='ingredient-container'>
                <h2>Añadir Ingrediente</h2>
                <form onSubmit={sumbitData} className='form-container'>
                    <FormInput label='Cantidad' required type='number' onChange={handleChange} name='quantity' value={quantity} />
                    <FormInput label='Nombre' required type='text' onChange={handleChange} name='name' value={name} />
                    <Button type='submit'  buttonType='dark' >ACEPTAR</Button>
                </form>
            </div>
        );

    if (containerIndex===1)
        return (
            <div className='ingredient-container'>
                <h2>Ingrediente Agregado!</h2>
                <p>El ingrediente <em>{name.toUpperCase()}</em> fue agregado exitosamente al inventario. </p>
                <Button type='button'  buttonType='dark' onClick={handleClick}>REGRESAR</Button>
            </div>
        );
};
export default IngredientForm
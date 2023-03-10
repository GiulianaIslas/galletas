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
    const [success,setSuccess] = useState(false);
    const [containerIndex, setContainerIndex] = useState(0);

    const handleChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        const id=Math.random()*100000000;
        formFields.id=Math.round(id);
        setFormFields({...formFields,[name]:value.toLowerCase()});
    }

    const handleNumberChange = (event) => {
        event.preventDefault();
        setFormFields({...formFields,['quantity']:event.target.valueAsNumber});
    }
    ///////////////ENDPOINT: addIngredient(json)

    const sumbitData = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/api/addIngredient", {
            method: "POST",
            headers: {"Content-Type": "json"},
            body: JSON.stringify(formFields),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Success:", data);
                setSuccess(true);
            })
            .catch((error) => {
                console.error("Error:", error);
            });

        console.log(formFields);
        setContainerIndex(1);
    }

    const handleClick = () => {
        setContainerIndex(0);
        setFormFields(defaultFormFields);
        setSuccess(false);
    }

    if (containerIndex===0)
        return(
            <div className='ingredient-container'>
                <h2>Añadir Ingrediente</h2>
                <form onSubmit={sumbitData} className='form-container'>
                    <FormInput label='Cantidad' required type='number' onChange={handleNumberChange} name='quantity' value={quantity} />
                    <FormInput label='Nombre' required type='text' onChange={handleChange} name='name' value={name} />
                    <Button type='submit'  buttonType='dark' >ACEPTAR</Button>
                </form>
            </div>
        );

    if (containerIndex===1 && success)
        return (
            <div className='ingredient-container'>
                <h2>Ingrediente Agregado!</h2>
                <p>El ingrediente <em>{name.toUpperCase()}</em> fue agregado exitosamente al inventario. </p>
                <Button type='button'  buttonType='dark' onClick={handleClick}>REGRESAR</Button>
            </div>
        );

    if (containerIndex===1 && !success)
        return (
            <div className='ingredient-container'>
                <h2>ERROR</h2>
                <p>El ingrediente <em>{name.toUpperCase()}</em> no se pude agregar al inventario. Intente de nuevo.</p>
                <Button type='button'  buttonType='dark' onClick={handleClick}>REGRESAR</Button>
            </div>
        );
};
export default IngredientForm
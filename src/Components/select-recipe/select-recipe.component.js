import './select-recipe.styles.scss';
import Select from "react-select";
import FormInput from "../Form-input/form-input.component.js";
import {useState} from "react";
import Button from "../button/button.component.js";
const SelectRecipe = () => {
    ////GET INGREDIENT LIST
    const fetchIngredients = async () => {
        await fetch ('http://localhost:3000/api/getAllRecipes')
            .then((data)=>{return data.json()});
    }
    const recipes = fetchIngredients();
    const defaultFormFields = {
        id:'',
        name:'',
        ingredients: [],
    }

    const handleSelectChange = ({value,name}) => {
        setFormFields({...formFields,['name']:name.toLowerCase(),['id']:value});
    };

    const [formFields,setFormFields] = useState()
    const {id, name} = formFields;
    return (
        <form className='form-storage-container'>
            <label>Receta </label>
            <Select onChange={handleSelectChange} options={recipes.map(sup => ({label:sup.name.toUpperCase(),value:sup.id}))}/>
            <FormInput label='Cantidad' required type='number'/>
            <Button buttonType='dark' type='submit'>INICIAR PROCESO</Button>
        </form>
    );
}
export default SelectRecipe

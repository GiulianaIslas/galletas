import './select-recipe.styles.scss';
import Select from "react-select";
import FormInput from "../Form-input/form-input.component.js";
import {useState} from "react";
import Button from "../button/button.component.js";
const SelectRecipe = () => {
    ////GET INGREDIENT LIST
    const [fetch,setFetch] =useState();
    fetch ('../../Data/recipes.json')
        .then((data)=>{data.json()})
        .then(data=> {
            setFetch(JSON.parse(data));
        })
        .then(data=>console.log(fetch));

    const defaultFormFields = {
        id:'',
        name:'',
        ingredients: [],
    }
    const [formFields,setFormFields] = useState(defaultFormFields);
    const {id, name} = formFields;
    const handleSelectChange = ({value,name}) => {
        setFormFields({...formFields,['name']:name.toLowerCase(),['id']:value});
    };

    return (
        <form className='form-storage-container'>
            <label>Receta </label>
            <Select onChange={handleSelectChange} options={fetch.map(op => ({label:op.name.toUpperCase(),value:op.id}))}/>
            <FormInput label='Cantidad' required type='number'/>
            <Button buttonType='dark' type='submit'>INICIAR PROCESO</Button>
        </form>
    );
}
export default SelectRecipe

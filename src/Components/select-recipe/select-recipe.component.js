import './select-recipe.styles.scss';
import Select from "react-select";
import FormInput from "../Form-input/form-input.component.js";
import {useState, useEffect} from "react";
import Button from "../button/button.component.js";


const SelectRecipe = () => {

    const [ recipes, setRecipes ] = useState([{name: ''}])
    const defaultFormFields = {
        name:'',
        ingredients: [],
    }

    const [formFields,setFormFields] = useState(defaultFormFields);
    const {name} = formFields;

    useEffect(() => {
      
        const getRecipes = async() => {
            await fetch("http://localhost:3000/api/getAllRecipes")
            .then( response => response.json() )
            .then( json => setRecipes(json) )
            console.log(recipes)
        }
        getRecipes()
     
    }, [])
    

    const handleSelectChange = ({value,name}) => {
        setFormFields({...formFields,['name']:name.toLowerCase()});
    };

    const startProcess = async() => {
        
    }

    return (
        <form className='form-storage-container'>
            <label>Receta </label>
            <select className='form-storage-select'>
                { recipes.length ? (
                    recipes.map( e => (
                        <option>{e.name}</option>
                    ))
                )
                : ''
            }
            </select>
            <Button buttonType='dark' type='submit' onClick={startProcess}>INICIAR PROCESO</Button>
        </form>
    );
}
export default SelectRecipe

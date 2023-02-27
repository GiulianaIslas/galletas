import {useState} from "react";
import './storage.styles.scss';
import IngredientForm from "../../Components/Ingredient-form/ingredient-form.component.js";

const Storage = () => {
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
        <div className='background-img' style={{backgroundImage: `url('https://drive.google.com/uc?export=view&id=1Zt86tzbGgf8yrMlQRoGe5D5jtuORgR1J')`}}>
            <div className='forms-container'>
                <IngredientForm/>
                <IngredientForm/>
            </div>
        </div>
    );
}
export default Storage
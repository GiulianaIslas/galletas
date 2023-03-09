import {useState} from "react";
import FormInput from "../Form-input/form-input.component.js";
import Button from "../button/button.component.js";
import './recipe-form.styles.scss';
import { ReactComponent as Circle } from '../../Media/circle.svg';
import { ReactComponent as FilledCircle } from '../../Media/circle-fill.svg';
import Select from 'react-select';


const RecipeCard2 = () => {
    const defaultIngredient = {
        id:'',
        quantity:'',
    }

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

    const options = [];
    for (let index = 0;index<ingredients.length;index++){
        options.push({
            label: ingredients[index]['name'],
            value: ingredients[index]['id'],
        });
    };

    const [ingredient, setIngredient] = useState(defaultIngredient);
    const {id,quantity} = ingredient;
    let recipe = [];

    const handleSelectChange = ({value}) => {
        setIngredient({...ingredient,['id']:value});
    }

    const handleQuantityChange = ({value}) => {
        setIngredient({...ingredient,['quantity']:value});
    }

    return (
        <div className='recipe-container'>
            <div className='circle-container'>
                <Circle className='svg'/>
                <FilledCircle className='filled-svg'/>
                <Circle className='svg'/>
            </div>
            <h2 >Editar o Agregar Receta</h2>
            <h3>Agrega los Ingredientes</h3>
            <form className='input-container' onSubmit={submitData}>
                <div className='ingredient-container'>
                    <Select props={ingredients} options={options}/>
                    <FormInput label='CANT.' required type='number' onChange={handleQuantityChange} className='quantity-input' name='quantity' value={quantity}/>
                </div>
                <div>
                    <Button  buttonType='dark' type='button'>AÑADIR</Button>
                    <Button buttonType='light' type='button'>ELIMINAR</Button>
                </div>
            </form>

        </div>
    )
}


import './storage.styles.scss';
import IngredientForm from "../../Components/Ingredient-form/ingredient-form.component.js";
import RecipeForm from "../../Components/Recipe-form/recipe-form.component.js";
import DeleteRecipe from "../../Components/Delete-recipe/delete-recipe.component.js";
const Storage = () => {
    return(
        <div className='background-img' style={{backgroundImage: `url('https://drive.google.com/uc?export=view&id=1Zt86tzbGgf8yrMlQRoGe5D5jtuORgR1J')`}}>
            <div className='forms-container'>
                <div className='left-container'>
                    <IngredientForm/>
                    <DeleteRecipe/>
                </div>
                <RecipeForm/>
            </div>
        </div>
    );
}
export default Storage
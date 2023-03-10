import IngredientStorage from "../../Components/Ingredient-storage/ingredient-storage.component.js";
import ProcessContainer from "../../Components/process-container/process-container.component.js";
import SelectRecipe from "../../Components/select-recipe/select-recipe.component.js";
import './factory.styles.scss';
const Factory = () => {
    return(
        <div className='background-img' style={{backgroundImage: `url('https://drive.google.com/uc?export=view&id=1Zt86tzbGgf8yrMlQRoGe5D5jtuORgR1J')`}}>

            <IngredientStorage/>
            <ProcessContainer/>
        </div>
    )
}

export default Factory
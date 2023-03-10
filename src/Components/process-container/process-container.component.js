import Button from "../button/button.component.js";
import './process-container.styles.scss'
import IngredientStorage from "../Ingredient-storage/ingredient-storage.component.js";

const ProcessContainer = () => {
    return(
        <div className='process-container'>
            <div className='row'>
                <Button buttonType='light' type='button'>Iniciar Amasado</Button>
                <div className='amasador'>3.AMASADOR</div>
                <div className='column-container'>
                    <div className='balanza'>1.BALANZA</div>
                    <div className='deposito'>2.DEPOSITO</div>
                </div>
                <Button buttonType='light' type='button'>Iniciar a Pesar</Button>
            </div>
            <div className='row'>
                <div className='molde'>4.MOLDE</div>
                <div className='horno'>5.HORNO</div>
                <Button buttonType='light' type='button'>Iniciar Horneado</Button>
            </div>
        </div>
    )
}

export default ProcessContainer
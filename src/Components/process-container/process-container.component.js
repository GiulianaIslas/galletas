import Button from "../button/button.component.js";
import './process-container.styles.scss'

const ProcessContainer = () => {
    return(
        <div className='process-container'>
            <div className='row'>
                <Button buttonType='light' type='button'>Iniciar Amasado</Button>
                <div className='amasador'>AMASADOR</div>
                <div className='column-container'>
                    <div className='balanza'>BALANZA</div>
                    <div className='deposito'>DEPOSITO</div>
                </div>
                <Button buttonType='light' type='button'>Iniciar a Pesar</Button>
            </div>
            <div className='row'>
                <div className='molde'>MOLDE</div>
                <div className='horno'>HORNO</div>
                <Button buttonType='light' type='button'>Iniciar Horneado</Button>
            </div>
        </div>
    )
}

export default ProcessContainer
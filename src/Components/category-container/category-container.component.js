import {useNavigate} from "react-router-dom";
import './category-container.styles.scss'
import Button from "../button/button.component.js";
import navigationComponent from "../../Routes/Navigation/navigation.component.js";
const CategoryContainer = ({category}) => {
    let navigate = useNavigate();
    const {buttonTitle,url,route,type} = category;
    const routeChange = ()=>{
        navigate(route);
    }
    return(
        <div className='category-container'>
            <div className='background-image' style={{backgroundImage:`url(${url})`}}>
                <Button buttonType={type} children={buttonTitle} onClick={routeChange}/>
            </div>
        </div>
    );
}

export default CategoryContainer
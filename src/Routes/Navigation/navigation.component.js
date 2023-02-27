import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import './navigation.styles.scss'
const Navigation = () => {
    return(
        <Fragment>
            <div className='links-container'>

                <Link className='home-link' to='/'>INICIO</Link>
                <div className='links-container-right'>
                    <Link className='nav-link' to='/almacen'>ALMACEN</Link>
                    <Link className='nav-link' to='/fabrica'>FABRICA</Link>
                </div>

            </div>
            <Outlet/>
        </Fragment>
        );
}
export default Navigation
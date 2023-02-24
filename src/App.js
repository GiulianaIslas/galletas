import './App.scss';
import {Routes,Route} from "react-router-dom";
import Home from "./Routes/Home/home.component";
import Storage from "./Routes/Storage/storage.component";
import Factory from "./Routes/Factory/factory.component";
import Navigation from "./Routes/Navigation/navigation.component";
const App =()=> {
    return (
        <Routes>

            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='almacen' element={<Storage/>}/>
                <Route path='fabrica' element={<Factory/>}/>
            </Route>

        </Routes>

    );
}

export default App;

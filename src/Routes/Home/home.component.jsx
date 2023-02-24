import CategoryContainer from "../../Components/category-container/category-container.component";
import './home.styles.scss';
const Home = () => {
    const categories = [
        {
            key: 1,
            buttonTitle:'ALMACEN',
            route:'almacen',
            type:'dark',
            url: 'https://drive.google.com/uc?export=view&id=1POEMqc5WRYZEvOhk_FEGYtSH8Ry_D5Wu',
        },
        {
            key:2,
            buttonTitle:'FABRICA',
            route: 'fabrica',
            type: 'light',
            url: 'https://drive.google.com/uc?export=view&id=1f6l5xmYC6PX1NoS_YGJ9bMldY4I6QKI8',
        },
    ]
    return (
        <div className='home'>
            {categories.map((category)=>(
                <CategoryContainer key={category.key} category={category}/>
            ))}
        </div>
    );
}

export default Home
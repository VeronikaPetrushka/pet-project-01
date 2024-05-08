import About from "../../components/About/About";
import EstateItemsList from "../../components/EstateItemsList/EstateItemsList";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const HomePage = () => {
    return (
        <div>
            <BurgerMenu/>
            <body>
                <About />
                <EstateItemsList /> 
            </body>
        </div>
    )
}

export default HomePage;
import { slide as Menu } from 'react-burger-menu';
import Navigation from '../Navigation/Navigation';

const BurgerMenu = () => {
    return (
        <Menu right>
            <Navigation />
        </Menu>
    )
}

export default BurgerMenu;
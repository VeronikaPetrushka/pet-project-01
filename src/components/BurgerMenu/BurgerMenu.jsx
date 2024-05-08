import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import css from './BurgerMenu.module.css'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleMenu} className={css.burgerMenuBtn}>
                {isOpen ? 'Close Menu' : 'Open Menu'}
            </button>
            {isOpen && (<Navigation />
                
            )}
        </div>
    );
}

export default BurgerMenu;
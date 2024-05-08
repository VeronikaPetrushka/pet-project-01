import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
     <nav className={css.Navigation}>
      <NavLink className={css.navLink} to="/">
        Головна
      </NavLink>
      <NavLink className={css.navLink} to="/Sell">
        Покупка
      </NavLink>
      <NavLink className={css.navLink} to="/Rent">
        Оренда
      </NavLink>
      <NavLink className={css.navLink} to="/NewBuild">
        Новобудови
      </NavLink>
      <NavLink className={css.navLink} to="/Commerce">
        Комерція
      </NavLink>
      <NavLink className={css.navLink} to="/eHome">
        єОселя
      </NavLink>
      <NavLink className={css.navLink} to="/FaQs">
        Питання/Відповідь
      </NavLink>
      <NavLink className={css.navLink} to="/ContactUs">
        Зв`&apos;`язатись з нами
      </NavLink>
     </nav>
    )
}

export default Navigation;
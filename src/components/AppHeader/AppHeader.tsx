import styles from "./style.module.scss"
import LogoHeader from "/icons/logo.svg"
import BurgerIcon from "/icons/burger.svg"
import TapeIcon from "/icons/tape.svg"
import CabinetIcon from "/icons/cabinet.svg"
import {NavLink, useLocation} from "react-router-dom";

const profileClass = {
  "/login": styles.header__link__active,
  "/register": styles.header__link__active,
  "/forgot-password": styles.header__link__active,
  "/reset-password": styles.header__link__active,
  "/profile": styles.header__link__active,
}

const AppHeader = () => {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <nav className={styles.header__navigation}>
          <NavLink
            to={"/"}
            className={({isActive}) => isActive ? styles.header__link__active : styles.header__link}>
            <img src={BurgerIcon} alt="icon" className={styles.header__icon}/>
            Конструктор
          </NavLink>
          <NavLink
            to={"/feed"}
            className={({isActive}) => isActive ? styles.header__link__active : styles.header__link}>
            <img src={TapeIcon} alt="icon" className={styles.header__icon}/>
            Лента заказов
          </NavLink>
        </nav>
        <NavLink to={"/"} className={styles.header__logo}>
          <img src={LogoHeader} alt="logo" className={styles.header__logo__icon}/>
        </NavLink>
        <NavLink
          to={"/profile"}
          className={`${profileClass[pathname as keyof typeof profileClass] || styles.header__link} ${styles.header__profile}`}>
          <img src={CabinetIcon} alt="icon" className={styles.header__icon}/>
          Личный кабинет
        </NavLink>
      </div>
    </header>
  );
};

export default AppHeader



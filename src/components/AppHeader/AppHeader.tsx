import styles from "./style.module.scss"
import LogoHeader from "/icons/logo.svg"
import BurgerIcon from "/icons/burger.svg"
import TapeIcon from "/icons/tape.svg"
import CabinetIcon from "/icons/cabinet.svg"
import {NavLink} from "react-router-dom";

const AppHeader = () => {
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
            to={"/orders"}
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
          className={({isActive}) => `${isActive ? styles.header__link__active : styles.header__link} ${styles.header__profile}`}>
          <img src={CabinetIcon} alt="icon" className={styles.header__icon}/>
          Личный кабинет
        </NavLink>
      </div>
    </header>
  );
};

export default AppHeader



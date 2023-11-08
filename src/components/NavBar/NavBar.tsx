import {FC, useCallback} from "react";
import styles from "./style.module.scss"
import {Navigate, NavLink, useLocation, useNavigate} from "react-router-dom"
import cookie from "js-cookie";

interface INavBar {
  navigation: {
    id: string;
    text: string;
    path: string;
  }[]
}

const NavBar: FC<INavBar> = ({navigation}) => {
  const navigate = useNavigate()

  const logout = useCallback(() => {
    cookie.remove("access_token")
    cookie.remove("refresh_token")

    return navigate("/login")
  }, [navigate])

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.navbar__column}>
          {navigation?.map((link) => (
            <NavLink
              end
              replace={true}
              key={link?.id}
              to={link?.path}
              className={({isActive}) => isActive ? styles.navbar__link_active : styles.navbar__link}>
              {link?.text}
            </NavLink>
          ))}
          <button className={styles.navbar__link} onClick={() => logout()}>Выход</button>
        </ul>
      </nav>
      <p className={styles.navbar__text}>
        В этом разделе вы можете
        изменить свои персональные данные
      </p>
    </div>
  );
};

export default NavBar;

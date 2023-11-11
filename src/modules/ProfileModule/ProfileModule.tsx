import styles from "./style.module.scss"
import {useEffect} from "react";
import {profileThunk} from "../../services/thunks/profileThunk.ts";
import {useAppDispatch} from "../../services/hooks.ts";
import NavBar from "../../components/NavBar/NavBar.tsx";
import {Outlet} from "react-router-dom";
import {v4 as uuid} from "uuid"

const navigation = [
  {
    id: uuid(),
    text: "Профиль",
    path: "/profile",
  },
  {
    id: uuid(),
    text: "История заказов",
    path: "/profile/orders",
  },
]

export const ProfileModule = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(profileThunk())
  }, [dispatch, profileThunk]);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__container}>
        <div className={styles.profile__navbar}>
          <NavBar navigation={navigation}/>
        </div>
        <div className={styles.profile__content}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

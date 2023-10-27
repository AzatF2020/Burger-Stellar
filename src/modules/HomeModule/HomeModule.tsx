import styles from "./style.module.scss"
import {Suspense, lazy} from "react";
import BurgerIngredients from "../../components/BurgerIngredients/BurgerIngredients.tsx";
import Loader from "../../ui/Loader/Loader.tsx";

const BurgerConstructor = lazy(() => import("../../components/BurgerConstructor/BurgerConstructor.tsx"))

export const HomeModule = () => {
  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__upper}>
          <h2 className={styles.home__title}>Соберите бургер</h2>
        </div>
        <div className={styles.home__components}>
          <Suspense fallback={<Loader/>}>
            <BurgerConstructor/>
          </Suspense>
          <BurgerIngredients/>
        </div>
      </div>
    </section>
  );
};


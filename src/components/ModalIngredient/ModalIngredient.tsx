import styles from "./style.module.scss"
import {Link, useParams} from "react-router-dom";
import {useAppSelector} from "../../services/hooks.ts";
import CloseIcon from "/icons/close-icon.svg"
import {useMemo} from "react";

const ModalIngredient = () => {
  const {id} = useParams()
  const ingredients = useAppSelector((state) => state.ingredientSlice.ingredientsFetch?.data)

  const ingredient = useMemo(() => {
    return ingredients!.find((ingredient) => ingredient._id === id)
  }, [ingredients, id])

  return (
    <div className={styles.ingredient}>
      <div className={styles.ingredient__container}>
        <div className={styles.ingredient__upper}>
          <h2 className={styles.ingredient__title}>Детали ингредиента</h2>
          <Link className={styles.ingredient__close} to={"/"}>
            <img src={CloseIcon} alt="close" className={styles.ingredient__close__icon}/>
          </Link>
        </div>
        <img src={ingredient?.image} alt="image" className={styles.ingredient__image}/>
        <div className={styles.ingredient__info__block}>
          <h3 className={styles.ingredient__name}>{ingredient?.name}</h3>
          <ul className={styles.ingredient__info}>
            <li className={styles.ingredient__list}>
              <p className={styles.ingredient__data__info}>Калории,ккал</p>
              <p className={styles.ingredient__data}>{ingredient?.calories}</p>
            </li>
            <li className={styles.ingredient__list}>
              <p className={styles.ingredient__data__info}>Белки, г</p>
              <p className={styles.ingredient__data}>{ingredient?.proteins}</p>
            </li>
            <li className={styles.ingredient__list}>
              <p className={styles.ingredient__data__info}>Жиры, г</p>
              <p className={styles.ingredient__data}>{ingredient?.fat}</p>
            </li>
            <li className={styles.ingredient__list}>
              <p className={styles.ingredient__data__info}>Углеводы, г</p>
              <p className={styles.ingredient__data}>{ingredient?.carbohydrates}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalIngredient;

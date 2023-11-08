import {FC} from "react";
import styles from "./styles.module.scss"
import CostIcon from "/icons/cost-icon.svg"
import {useCustomDrag} from "../../utils/helpers/customHooks/useCustomDrag.ts";
import {TIngredientData} from "../../services/types/data.ts";
import {Link, useLocation} from "react-router-dom";

interface IIngredient {
  readonly item?: TIngredientData;
  readonly counter: number;
  readonly image: string;
  readonly cost: number;
  readonly name: string
}

const Ingredient: FC<IIngredient> = ({item, counter, image, cost, name}) => {
  let location = useLocation();
  const {isDragging, drag} = useCustomDrag("ingredient", item)
  const opacity = isDragging ? 0.6 : 1

  return (
    <Link
      state={{ backgroundLocation: location }}
      key={item?._id}
      to={`${item?._id}`}
      className={styles.ingredient}
      style={{ opacity }}
      ref={drag}
      data-testid={`ingredient`}>
      {counter !== 0 && <div className={styles.ingredient__counter}>{counter}</div>}
      <div className={styles.ingredient__container}>
        <img src={image} alt="image" className={styles.ingredient__image}/>
        <div className={styles.ingredient__cost__info}>
          <p className={styles.ingredient__cost}>{cost}</p>
          <img src={CostIcon} alt="" className={styles.ingredient__cost__image}/>
        </div>
        <h5 className={styles.ingredient__name}>{name}</h5>
      </div>
    </Link>
  );
};

export default Ingredient;



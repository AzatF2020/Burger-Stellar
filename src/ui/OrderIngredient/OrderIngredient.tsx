import {FC, useRef} from "react";
import styles from "./style.module.scss";
import CostIcon from "/icons/cost-icon.svg";
import TrashIcon from "/icons/trash.svg";
import LockIcon from "/icons/lock.svg";
import {useDragDrop} from "../../helpers/customHooks/useDragDrop.ts";

interface IOrderIngredient {
  fn?: (unique_id: string | number) => void
  readonly unique_id?: string | number;
  readonly image: string;
  readonly cost: number;
  readonly name: string;
  readonly type?: "top" | "bottom" | "middle";
  readonly index?: number;
}

const IngredientClasses = {
  "top": styles.ingredient__top,
  "middle": styles.ingredient,
  "bottom": styles.ingredient__bottom
}

const IngredientIcon = {
  "top": LockIcon,
  "middle": TrashIcon,
  "bottom": LockIcon,
}

const OrderIngredient: FC<IOrderIngredient> = ({unique_id, image, cost, name, type = "middle", fn, index}) => {
  const ingredientOrderRef = useRef(null)
  const { opacity } = useDragDrop(ingredientOrderRef, index!, unique_id)

  return (
    <div ref={type === "middle" ? ingredientOrderRef : null} className={IngredientClasses[type]} style={{opacity}}>
      <div className={styles.ingredient__block__info}>
        <img src={image} alt="image" className={styles.ingredient__image}/>
        <h5 className={styles.ingredient__name}>{name}</h5>
      </div>
      <div className={styles.ingredient__block}>
        <span className={styles.ingredient__cost}>{cost}</span>
        <img src={CostIcon} alt="icon" className={styles.ingredient__cost__icon}/>
      </div>
      <button className={styles.ingredient__remove} onClick={() => type === "middle" && fn!(unique_id!)}>
        <img src={IngredientIcon[type]} alt="icon" className={styles.ingredient__icon}/>
      </button>
    </div>
  );
};

export default OrderIngredient;

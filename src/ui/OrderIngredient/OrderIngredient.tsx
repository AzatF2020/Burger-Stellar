import {FC} from "react";
import styles from "./style.module.scss";
import CostIcon from "/icons/cost-icon.svg";
import TrashIcon from "/icons/trash.svg";
import LockIcon from "/icons/lock.svg";

interface IOrderIngredient {
  readonly image: string;
  readonly cost: number;
  readonly name: string;
  readonly type?: string;
}

const OrderIngredient: FC<IOrderIngredient> = ({image, cost, name, type}) => {
  return (
    <div className={type === "bun" ? styles.ingredient__bun : styles.ingredient}>
      <div className={styles.ingredient__block__info}>
        <img src={image} alt="image" className={styles.ingredient__image}/>
        <h5 className={styles.ingredient__name}>{name}</h5>
      </div>
      <div className={styles.ingredient__block}>
        <span className={styles.ingredient__cost}>{cost}</span>
        <img src={CostIcon} alt="icon" className={styles.ingredient__cost__icon}/>
      </div>
      <img src={type === "bun" ? LockIcon : TrashIcon} alt="icon" className={styles.ingredient__icon}/>
    </div>
  );
};

export default OrderIngredient;

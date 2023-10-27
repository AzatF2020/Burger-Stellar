import {FC} from "react";
import styles from "./styles.module.scss"
import CostIcon from "/icons/cost-icon.svg"
import {useCustomDrag} from "../../helpers/customHooks/useCustomDrag.ts";
import {TIngredientData} from "../../services/types/data.ts";

interface IIngredient {
  readonly item?: TIngredientData;
  readonly counter?: number;
  readonly image: string;
  readonly cost: number;
  readonly name: string
}

const Ingredient: FC<IIngredient> = ({item, counter, image, cost, name}) => {
  const {isDragging, drag} = useCustomDrag("ingredient", item)
  const opacity = isDragging ? 0.4 : 1

  return (
    <div className={styles.ingredient} style={{ opacity }} ref={drag} data-testid={`ingredient`}>
      <span className={styles.ingredient__counter}>{counter}</span>
      <div className={styles.ingredient__container}>
        <img src={image} alt="image" className={styles.ingredient__image}/>
        <div className={styles.ingredient__cost__info}>
          <p className={styles.ingredient__cost}>{cost}</p>
          <img src={CostIcon} alt="" className={styles.ingredient__cost__image}/>
        </div>
        <h5 className={styles.ingredient__name}>{name}</h5>
      </div>
    </div>
  );
};

export default Ingredient;



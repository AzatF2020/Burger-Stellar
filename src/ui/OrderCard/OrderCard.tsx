import {FC, memo} from "react"
import styles from "./style.module.scss"
import {TIngredientData} from "../../services/types/data.ts";
import CostIcon from "/icons/cost-icon.svg";
import {countOrderIngredients} from "../../utils/helpers/helpers/counterOrder.ts";

interface IOrderCard {
  id: number;
  createdAt: string;
  name: string;
  ingredients: TIngredientData[] | undefined;
  price: number
}

const OrderCard: FC<IOrderCard> = ({id, createdAt, name, ingredients, price}) => {
  return (
    <div className={styles?.card}>
      <ul className={styles.card__container}>
        <li className={styles.card__upper}>
          <h5 className={styles.card__id}>#{id}</h5>
          <time className={styles.card__createdAt}>{createdAt}</time>
        </li>
        <li className={styles.card__middle}>
          <h3 className={styles.card__name}>{name}</h3>
        </li>
        <li className={styles.card__bottom}>
          <div className={styles.card__ingredients__images}>
            {ingredients!?.slice(0, 4)?.map((ingredient, index) => (
              <span style={{zIndex: `${6 - index}`, transform: `translateX(-${index * 2}rem)`}} key={index} className={styles.card__image__wrapper}>
                <img
                  src={ingredient?.image}
                  alt="icon" className={styles.card__image}
                  />
              </span>
            ))}
            {countOrderIngredients(ingredients) !== 0 &&
              (<span
                className={styles.card__image__wrapper}
                style={{zIndex: 0, transform: `translateX(-${7.5}rem)`}}>
                <img
                  src={ingredients![5]?.image}
                  alt="icon" className={styles.card__image}
                  style={{filter: "brightness(50%)"}}
                />
                <p className={styles.card__image__count}>+{countOrderIngredients(ingredients)}</p>
              </span>)
            }
          </div>
          <span className={styles.card__block__price}>
            <p className={styles.card__price}>{price}</p>
            <img src={CostIcon} alt="icon"/>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default memo(OrderCard);

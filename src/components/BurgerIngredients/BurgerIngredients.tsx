import styles from "./style.module.scss"
import OrderIngredient from "../../ui/OrderIngredient/OrderIngredient.tsx";
import Button from "../../ui/Button/Button.tsx";
import {useDrop} from "react-dnd";
import {useCallback} from "react";
import CostIcon from "/icons/cost-icon.svg";
import {addIngredient, removeIngredient} from "../../services/slices/IngredientSlice.ts";
import {useAppDispatch, useAppSelector} from "../../services/hooks.ts";
import type {TIngredientData} from "../../services/types/data.ts";
import {useCalculateIngredients} from "../../utils/helpers/customHooks/useCalculateIngredients.ts";

const BurgerIngredients = () => {
  const dispatch = useAppDispatch()
  const {ingredientsOrder, buns} = useAppSelector((state) => state.ingredientSlice)
  const {price} = useCalculateIngredients(ingredientsOrder, buns)

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "ingredient",
    drop: (item) => dispatch(addIngredient(item)),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }))

  const getIngredientId = useCallback((unique_id: string | number) => {
    dispatch(removeIngredient(unique_id))
  }, [dispatch])

  // #NOTE: Just for styling. You can skip function.
  const setContainerClassOnDrop = () => {
    return isOver ?  styles.ingredients__container_active : (!ingredientsOrder.length && (!buns.top || !buns.bottom)) ?
      (isOver ? styles.ingredients__container_active : styles.ingredients__container)
      : styles.ingredients__container_disable
  }

  return (
    <div className={styles.ingredients}>
      <div ref={drop} className={setContainerClassOnDrop()}>
        {buns.top &&
          <OrderIngredient
            cost={buns.top?.price}
            name={buns.top?.name}
            image={buns.top?.image}
            type={"top"}/>}
        <div className={styles.ingredients__block__burger}>
          {ingredientsOrder.map((ingredient: TIngredientData, index: number) => (
            <OrderIngredient
              cost={ingredient.price}
              key={ingredient.unique_id}
              name={ingredient.name}
              image={ingredient.image}
              unique_id={ingredient?.unique_id}
              index={index}
              fn={getIngredientId}
              type={"middle"}
            />
          ))}
        </div>
        {buns.bottom && <OrderIngredient
          cost={buns.bottom?.price}
          name={buns.bottom?.name}
          image={buns.bottom?.image}
          type={"bottom"}/>}
      </div>
      <div className={styles.ingredients__bottom}>
        <span className={styles.ingredients__cost__block}>
          <h5 className={styles.ingredients__price}>{price}</h5>
          <img src={CostIcon} alt="cost icon" className={styles.ingredients__cost__image}/>
        </span>
        <Button word={"Оформить заказ"} size={"small"} disabled={!buns?.top}/>
      </div>
    </div>
  );
};

export default BurgerIngredients;



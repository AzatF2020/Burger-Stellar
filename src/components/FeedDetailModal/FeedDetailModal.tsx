import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import styles from "./style.module.scss"
import {ordersSelector} from "../../services/selectors/ordersSelector.ts";
import {FC, memo, useMemo} from "react";
import CloseIcon from "/icons/close-icon.svg";
import CostIcon from "/icons/cost-icon.svg";
import {TIngredientData} from "../../services/types/data.ts";
import {countFeedIngredients} from "../../utils/helpers/helpers/countFeedIngredients.ts";

interface IFeedDetailModal {
  path?: string;
  orderType?: "ordersFeed" | "myOrders"
}

const FeedDetailModal: FC<IFeedDetailModal> = ({path = "/", orderType = "ordersFeed" }) => {
  const { id } = useParams()
  const orders = useSelector(ordersSelector)

  const order = useMemo(() => {
    const feedOrders = orders[orderType]?.find((order) => order._id === id)
    return {
      ...feedOrders,
      feed_ingredients: Array.from(new Set(feedOrders?.feed_ingredients))
    }
  }, [orders, id, orderType])

  return (
  <div className={styles.modal}>
    <div className={styles.modal__container}>
      <div className={styles.modal__upper}>
        <p className={styles.modal__number}>#{order?.number}</p>
        <Link className={styles.modal__close} to={path}>
          <img src={CloseIcon} alt="close" className={styles.ingredient__close__icon}/>
        </Link>
      </div>
      <div className={styles.modal__header}>
        <h1 className={styles.modal__name}>{order?.name}</h1>
        <p className={styles.modal__status}>{order?.status}</p>
      </div>
      <div className={styles.modal__bottom}>
        <p className={styles.modal__bottom__text}>Состав:</p>
        <ul className={styles.modal__content__block}>
          {order?.feed_ingredients.map((ingredient: TIngredientData, index) => (
            <li className={styles.modal__content} key={index}>
              <span className={styles.modal__block__left}>
                <div className={styles.modal__image__wrapper}>
                  <img src={ingredient?.image} alt="image" className={styles.modal__ingredient__image}/>
                </div>
                <p className={styles.modal__ingredient__name}>{ingredient?.name}</p>
              </span>
                <span className={styles.modal__block__right}>
                <p className={styles.modal__cost}>{countFeedIngredients(order?.feed_ingredients, ingredient._id)} x {ingredient?.price}</p>
                <img src={CostIcon} alt="image" className={styles.modal__cost__icon}/>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.modal__footer}>
        <time className={styles.modal__time}>{order?.createdAt}</time>
        <span className={styles.modal__block}>
          <p className={styles.modal__cost}>{order?.price}</p>
          <img src={CostIcon} alt="image" className={styles.modal__cost__icon}/>
        </span>
      </div>
    </div>
  </div>
  );
};

export default memo(FeedDetailModal);

import styles from "./style.module.scss"
import {useSelector} from "react-redux";
import {RootState} from "../../services";
import {ordersSelectorsFeedDone} from "../../services/selectors/ordersSelector.ts";
import {memo} from "react";

const FeedInfo = () => {
  const { total, totalToday } = useSelector((state: RootState) => state.ordersSlice)
  const { ordersInfo } = useSelector(ordersSelectorsFeedDone)

  console.log(ordersInfo)

  return (
    <div className={styles.info}>
      <ul className={styles.info__upper}>
        <li className={styles.info__block__upper}>
          <h5 className={styles.info__upper__title}>Готовы:</h5>
          <div className={styles.info__number__block}>
            {ordersInfo?.done.map((orderNumber: number) => (
              <p className={styles.info__order__text} key={orderNumber}>{orderNumber}</p>
            ))}
          </div>
        </li>
        <li className={styles.info__block__upper}>
          <h5 className={styles.info__upper__title}>В работе:</h5>
          <div className={styles.info__number__block}>
            {ordersInfo?.pending.map((orderNumber: number) => (
              <p className={styles.info__order__text} key={orderNumber}>{orderNumber}</p>
            ))}
          </div>
        </li>
      </ul>
      <ul className={styles.info__common}>
        <li className={styles.info__block}>
          <p className={styles.info__title}>Выполнено за все время:</p>
          <h3 className={styles.info__orders__count}>{total?.feed}</h3>
        </li>
        <li className={styles.info__block}>
          <p className={styles.info__title}>Выполнено за сегодня:</p>
          <h3 className={styles.info__orders__count}>{totalToday?.feed}</h3>
        </li>
      </ul>
    </div>
  );
};

export default memo(FeedInfo)
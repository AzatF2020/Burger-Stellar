import {memo, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../services/hooks.ts";
import {ordersSelector} from "../../services/selectors/ordersSelector.ts";
import {onClose, TOrder, wsInit} from "../../services/slices/orderSlice.ts";
import styles from "./style.module.scss"
import OrderCard from "../../ui/OrderCard/OrderCard.tsx";
import {Link, useLocation} from "react-router-dom";

const Feed = () => {
  const location = useLocation()
  const {ordersFeed} = useAppSelector(ordersSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsInit("feed"))

    return () => {
      dispatch(onClose("feed"))
    }
  }, [dispatch, wsInit, onClose]);

  return (
    <div className={styles.feed}>
      {ordersFeed?.map((order: TOrder) => (
       <Link
         state={{ background: location }}
         to={`/feed/${order._id}`}
         key={order._id}
         className={styles.feed__card__link}>
          <OrderCard
            name={order?.name}
            price={order?.price!}
            id={order?.number}
            ingredients={order?.feed_ingredients}
            createdAt={order?.createdAt}
            />
       </Link>
        ))}
    </div>
  );
};

export default memo(Feed);

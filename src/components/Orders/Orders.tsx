import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../services/hooks.ts";
import {ordersSelectorFeed} from "../../services/selectors/ordersSelector.ts";
import {onClose, TOrder, wsInit} from "../../services/slices/orderSlice.ts";
import styles from "./style.module.scss"
import OrderCard from "../../ui/OrderCard/OrderCard.tsx";

const Orders = () => {
  const {orders} = useAppSelector(ordersSelectorFeed)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(wsInit("feed"))

    return () => {
      dispatch(onClose("feed"))
    }
  }, [dispatch, wsInit, onClose]);

  return (
    <div className={styles.orders}>
      {orders?.map((order: TOrder) => (
        <OrderCard
          name={order?.name}
          price={order?.price!}
          id={order?.number}
          ingredients={order?.feed_ingredients}
          createdAt={order?.createdAt}
          key={order._id}/>
      ))}
    </div>
  );
};

export default Orders;

import {memo, useEffect} from "react";
import styles from "./style.module.scss"
import {useAppDispatch, useAppSelector} from "../../services/hooks.ts";
import OrderCard from "../../ui/OrderCard/OrderCard.tsx";
import {onClose, wsInit} from "../../services/slices/orderSlice.ts";
import {ordersSelector} from "../../services/selectors/ordersSelector.ts";
import {Link, useLocation} from "react-router-dom";

const MyOrdersModule = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { myOrders } = useAppSelector(ordersSelector)

  useEffect(() => {
    dispatch(wsInit("my"))

    return () => {
      dispatch(onClose("my"))
    }
  }, [dispatch, wsInit, onClose])

  return (
    <div className={styles.order}>
      {myOrders?.map((order) => (
        <Link
          key={order._id}
          to={`/profile/orders/${order?._id}`}
          state={{background: location}}
          className={styles.order__card}>
          <OrderCard
            id={order?.number}
            name={order?.name}
            price={order?.price!}
            ingredients={order?.feed_ingredients}
            createdAt={order?.createdAt}/>
        </Link>
        ))}
    </div>
  );
};

export default memo(MyOrdersModule)



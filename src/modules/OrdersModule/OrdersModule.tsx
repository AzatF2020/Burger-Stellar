import styles from "./style.module.scss"
import Orders from "../../components/Orders/Orders.tsx";

export const OrdersModule = () => {

  return (
    <section className={styles.orders}>
      <Orders/>

    </section>
  );
};

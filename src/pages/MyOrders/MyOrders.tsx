import {lazy, Suspense} from "react";
import Loading from "../../components/Loading/Loading.tsx";

const MyOrdersModule = lazy(() => import("../../modules/MyOrdersModule/MyOrdersModule.tsx"))

export const MyOrders = () => {
  return (
    <section>
      <Suspense fallback={<Loading style={{alignItems: "flex-start", justifyContent: "center"}}/>}>
        <MyOrdersModule/>
      </Suspense>
    </section>
  );
};

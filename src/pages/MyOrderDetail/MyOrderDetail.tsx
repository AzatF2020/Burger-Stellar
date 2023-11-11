import {Modal} from "../../modules";
import {lazy, Suspense} from "react";
import Loading from "../../components/Loading/Loading.tsx";

const FeedDetailModal = lazy(() => import("../../components/FeedDetailModal/FeedDetailModal.tsx"))

export const MyOrderDetail = () => {
  return (
    <>
      <Modal>
        <Suspense fallback={<Loading/>}>
          <FeedDetailModal path={"/profile/orders"} orderType={"myOrders"}/>
        </Suspense>
      </Modal>
    </>
  );
};



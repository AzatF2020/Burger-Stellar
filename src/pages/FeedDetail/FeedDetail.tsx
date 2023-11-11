import {Modal} from "../../modules";
import {lazy, Suspense} from "react";
import Loading from "../../components/Loading/Loading.tsx";

const FeedDetailModal = lazy(() => import("../../components/FeedDetailModal/FeedDetailModal.tsx"))

export const FeedDetail = () => {
  return (
    <>
      <Modal>
        <Suspense fallback={<Loading/>}>
          <FeedDetailModal path={"/feed"}/>
        </Suspense>
      </Modal>
    </>
  );
};



import styles from "./style.module.scss"
import {lazy, Suspense} from "react";
import Loading from "../../components/Loading/Loading.tsx";
const Feed = lazy(() => import("../../components/Feed/Feed.tsx"))
const FeedInfo = lazy(() => import("../../components/FeedInfo/FeedInfo.tsx"))

export const FeedModule = () => {
  return (
    <section className={styles.feed}>
      <div className={styles.feed__block__one}>
        <Suspense fallback={<Loading/>}>
          <Feed/>
        </Suspense>
      </div>
      <div className={styles.feed__block__two}>
        <Suspense fallback={<Loading/>}>
          <FeedInfo/>
        </Suspense>
      </div>
    </section>
  );
}

import styles from "./style.module.scss"
import Loader from "../../ui/Loader/Loader.tsx";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Loader style={{width: "10rem", height: "10rem"}}/>
    </div>
  );
};

export default Loading;

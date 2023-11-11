import styles from "./style.module.scss"
import Loader from "../../ui/Loader/Loader.tsx";
import {FC} from "react";

interface ILoading {
  style?: {[keyof: string]: string}
}

const Loading: FC<ILoading> = ({style}) => {
  return (
    <div className={styles.loading} style={style}>
      <Loader style={{width: "10rem", height: "10rem"}}/>
    </div>
  );
};

export default Loading;

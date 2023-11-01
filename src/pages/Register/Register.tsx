import styles from "./style.module.scss"
import {RegisterModule} from "../../modules";

export const Register = () => {
  return (
    <div className={styles.register}>
      <RegisterModule/>
    </div>
  );
};


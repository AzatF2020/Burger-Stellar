import styles from "./style.module.scss"
import RegisterForm from "../../components/RegisterForm/RegisterForm.tsx";

export const RegisterModule = () => {
  return (
    <div className={styles.register}>
      <RegisterForm/>
    </div>
  );
};


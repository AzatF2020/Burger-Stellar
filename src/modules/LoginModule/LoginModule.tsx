import styles from "./style.module.scss"
import LoginForm from "../../components/LoginForm/LoginForm.tsx";

export const LoginModule = () => {
  return (
    <div className={styles.login}>
      <LoginForm/>
    </div>
  );
};


import styles from "./style.module.scss"
import ForgotPasswordForm from "../../components/ForgotPasswordForm/ForgotPasswordForm.tsx";

export const ForgotPasswordModule = () => {
  return (
    <div className={styles.forgot}>
      <ForgotPasswordForm/>
    </div>
  );
};



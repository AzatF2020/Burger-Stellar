import styles from "./style.module.scss"
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm.tsx";

export const ResetPasswordModule = () => {
  return (
    <div className={styles.reset}>
      <ResetPasswordForm/>
    </div>
  );
};

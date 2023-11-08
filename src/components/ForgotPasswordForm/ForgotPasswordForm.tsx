import styles from "./style.module.scss"
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import {emailRegex} from "../../utils/helpers/constants/constants.ts";
import Input from "../../ui/Input/Input.tsx";
import Button from "../../ui/Button/Button.tsx";
import { NavLink } from "react-router-dom"

const ForgotPasswordForm = () => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    mode: "onChange"
  })

  const onSubmit = useCallback((data: {[keyof: string]: string}) => {
    console.log(data)
  }, [])

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.form__title}>Восстановление пароля</h2>
      <div className={styles.form__inputs__container}>
        <Input
          register={register}
          name={"email"}
          errors={errors}
          placeholder={"Email"}
          type={"email"}
          validation={{
            required: {value: true, message: "Обязательное поле"},
            pattern: {value: emailRegex, message: "Неверный формат почты"}
          }}
        />
      </div>
      <Button type={"submit"} disabled={!isValid} word={"Восстановить"}/>
      <div className={styles.form__bottom}>
        <p className={styles.form__text}>Вспомнили пароль?</p>
        <NavLink to={"/login"} className={styles.form__link}>Войти</NavLink>
      </div>
    </form>
  );
};

export default ForgotPasswordForm;
import styles from "./style.module.scss"
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input/Input.tsx";
import Button from "../../ui/Button/Button.tsx";
import { NavLink } from "react-router-dom"

const ResetPasswordForm = () => {
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
          name={"password"}
          errors={errors}
          placeholder={"Введите новый пароль"}
          type={"password"}
          validation={{
            required: {value: true, message: "Обязательное поле"},
            minLength: {value: 5, message: "Минимальное кол-во символов 5"},
            maxLength: {value: 20, message: "Максимальное кол-во символов 20"},
          }}
        />
        <Input
          register={register}
          name={"code"}
          errors={errors}
          placeholder={"Введите код из письма"}
          type={"text"}
          validation={{
            required: {value: true, message: "Обязательное поле"},
          }}
        />
      </div>
      <Button type={"submit"} disabled={!isValid} word={"Сохранить"}/>
      <div className={styles.form__bottom}>
        <p className={styles.form__text}>Вспомнили пароль?</p>
        <NavLink to={"/login"} className={styles.form__link}>Войти</NavLink>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
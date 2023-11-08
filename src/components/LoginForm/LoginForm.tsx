import styles from "./style.module.scss"
import {useCallback} from "react";
import { useForm } from "react-hook-form";
import {emailRegex} from "../../utils/helpers/constants/constants.ts";
import Input from "../../ui/Input/Input.tsx";
import Button from "../../ui/Button/Button.tsx";
import {NavLink} from "react-router-dom"
import {loginThunk} from "../../services/thunks/loginThunk.ts";
import {useAppDispatch} from "../../services/hooks.ts";

const LoginForm = () => {
  const dispatch = useAppDispatch()
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    mode: "onChange"
  })

  const onSubmit = useCallback(({email, password}: {[keyof: string]: string}) => {
    dispatch(loginThunk({email, password}))
  }, [dispatch])

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.form__title}>Вход</h2>
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
        <Input
          register={register}
          name={"password"}
          errors={errors}
          placeholder={"Пароль"}
          type={"password"}
          validation={{
            required: {value: true, message: "Обязательное поле"},
            minLength: {value: 5, message: "Минимальное кол-во символов 5"},
            maxLength: {value: 20, message: "Максимальное кол-во символов 20"},
          }}
        />
      </div>
      <Button type={"submit"} disabled={!isValid} word={"Войти"}/>
      <ul className={styles.form__bottom}>
        <li className={styles.form__list}>
          <p className={styles.form__text}>Вы — новый пользователь?</p>
          <NavLink to={"/register"} className={styles.form__link}>Зарегистрироваться</NavLink>
        </li>
        <li className={styles.form__list}>
          <p className={styles.form__text}>Забыли пароль?</p>
          <NavLink to={"/forgot-password"} className={styles.form__link}>Восстановить пароль</NavLink>
        </li>
      </ul>
    </form>
  );
};

export default LoginForm;
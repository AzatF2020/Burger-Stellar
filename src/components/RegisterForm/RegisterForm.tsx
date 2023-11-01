import styles from "./style.module.scss"
import {useForm} from "react-hook-form";
import Input from "../../ui/Input/Input.tsx";
import {useCallback} from "react";
import Button from "../../ui/Button/Button.tsx";
import {emailRegex} from "../../helpers/constants/constants.ts";

const RegisterForm = () => {
  const {register, handleSubmit, formState: {errors, isValid}} = useForm({
    mode: "onChange"
  })

  const onSubmit = useCallback((data: {[keyof: string]: string}) => {
    console.log(data)
  }, [])

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.form__title}>Регистрация</h2>
      <div className={styles.form__inputs__container}>
        <Input
          register={register}
          name={"name"}
          errors={errors}
          placeholder={"Имя"}
          validation={{
            required: {value: true, message: "Обязательное поле"},
            minLength: {value: 3, message: "Минимальное кол-во символов 3"},
          }}
        />
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
      <Button type={"submit"} disabled={!isValid} word={"Зарегестрироваться"}/>
    </form>
  );
};

export default RegisterForm;

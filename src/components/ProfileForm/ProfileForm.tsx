import styles from "./style.module.scss"
import {useCallback, useEffect, useState} from "react";
import { useForm } from "react-hook-form";
import {emailRegex} from "../../utils/helpers/constants/constants.ts";
import Input from "../../ui/Input/Input.tsx";
import Button from "../../ui/Button/Button.tsx";
import { useAppDispatch, useAppSelector } from "../../services/hooks.ts";
import { RootState } from "../../services";
import {TUserData} from "../../services/types/data.ts";
import {profileEditThunk} from "../../services/thunks/profileEditThunk.ts";

const ProfileForm = () => {
  const dispatch = useAppDispatch()
  const [profileData, setProfileData] = useState<null | TUserData>(null)
  const { userData } = useAppSelector((state: RootState) => state.authSlice)
  const { register, handleSubmit, formState: {errors, isValid}, reset } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
    }
  })

  const cancelInputValues = () => {
    const defaultValues = {
      name: profileData?.name,
      email: profileData?.email,
    }
    reset(defaultValues)
  }

  useEffect(() => {
    setProfileData(userData)
    const defaultValues = {
      name: profileData?.name,
      email: profileData?.email,
    }
    reset(defaultValues)
  }, [reset, userData, profileData, setProfileData]);

  const onSubmit = useCallback(({name, email, password}: {[keyof: string]: string}) => {
    dispatch(profileEditThunk({name, email, password}))
  }, [dispatch])

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            minLength: {value: 5, message: "Минимальное кол-во символов 5"},
            maxLength: {value: 20, message: "Максимальное кол-во символов 20"},
          }}
        />
      </div>
      <div className={styles.form__buttons}>
        <Button type={"submit"} word={"Сохранить"}/>
        <Button word={"Отмена"} fn={cancelInputValues}/>
      </div>
    </form>
  );
};

export default ProfileForm;
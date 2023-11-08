import {FC, FormEvent, InputHTMLAttributes, memo, useCallback} from "react";
import styles from "./style.module.scss"
import { useState } from "react"
import EyeIcon from "/icons/eye.svg"

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  register: any;
  errors?: any
  name: string;
  validation: any;
  args?: any
  value?: string
}

const Input: FC<IInput> = ({register, errors, name, validation, placeholder, type, value}) => {
  const [hide, setHide] = useState<boolean>(false)

  // #NOTE: Just attr for password if it's hidden
  const typeAttr = useCallback((): string => {
    return type !== "password" ? "text" : ((type === "password" && hide) ? "text" : "password")
  }, [type, hide])

  const hidePassword = useCallback((event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setHide((prevVal: boolean) => !prevVal)
  }, [setHide])

  return (
    <label className={styles.label}>
      <input
        value={value}
        name={name}
        className={errors[name] ? styles.input_disabled : styles.input}
        type={typeAttr()}
        {...register(name, validation, value)}
        placeholder={placeholder}
      />
      <span className={styles.label__placeholder}>{placeholder}</span>
      {errors[name] && <p className={styles.input__error__message}>{errors[name]?.message}</p>}
      {type === "password" &&
        <button
          className={styles.input__hide__button}
          onClick={hidePassword}>
        <img src={EyeIcon} alt="eye" className={styles.input__hide__icon}/>
      </button>}
    </label>
  );
};

export default memo(Input);

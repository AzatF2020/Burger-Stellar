import {FC, InputHTMLAttributes, memo, useCallback} from "react";
import styles from "./style.module.scss"
import { useState } from "react"
import EyeIcon from "/icons/eye.svg"

interface IInput extends InputHTMLAttributes<HTMLInputElement>{
  register: any;
  errors?: any
  name: string;
  validation: any;
  args?: any
}

const Input: FC<IInput> = ({register, errors, name, validation, placeholder, type}) => {
  const [hide, setHide] = useState<boolean>(false)

  // #NOTE: Just attr for password if it's hidden
  const typeAttr = useCallback((): string => {
    return type !== "password" ? "text" : ((type === "password" && hide) ? "text" : "password")
  }, [type, hide])

  return (
    <label className={styles.label}>
      <input
        name={name}
        className={styles.input}
        placeholder={placeholder}
        type={typeAttr()}
        {...register(name, validation)}
      />
      {errors[name] && <p className={styles.input__error__message}>{errors[name]?.message}</p>}
      {type === "password" &&
        <button
          className={styles.input__hide__button}
          onClick={() => setHide((prevVal: boolean) => !prevVal)}>
        <img src={EyeIcon} alt="eye" className={styles.input__hide__icon}/>
      </button>}
    </label>
  );
};

export default memo(Input);

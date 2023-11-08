import styles from "./style.module.scss"
import {ButtonHTMLAttributes, FC} from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    word: string;
    readonly size?: "small" | "middle" | "large";
    readonly fn?: (args: any) => any
}

const buttonClass = {
  "small": styles.button__small,
  "middle": styles.button__middle,
  "large": styles.button__large,
}

const Button: FC<IButton> = ({word, size = "middle", type, disabled = false, fn}) => {
  return (
    <button className={buttonClass[size]} type={type} disabled={disabled} onClick={fn}>{word}</button>
  );
};

export default Button;

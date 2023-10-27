import styles from "./style.module.scss"
import {ButtonHTMLAttributes, FC} from "react";

interface IButton {
    word: string;
    args?: ButtonHTMLAttributes<HTMLButtonElement>;
    readonly size?: "small" | "middle" | "large";
}

const buttonClass = {
  "small": styles.button__small,
  "middle": styles.button__middle,
  "large": styles.button__large,
}

const Button: FC<IButton> = ({word, size = "middle", ...args}) => {
  return (
    <button className={buttonClass[size]} {...args}>{word}</button>
  );
};

export default Button;

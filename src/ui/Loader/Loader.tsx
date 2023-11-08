import styles from "./style.module.scss"
import {FC} from "react"

interface ILoader {
  style?: {[keyof: string]: string}
}

const Loader: FC<ILoader> = ({style}) => {
  return (
    <span className={styles.loader} style={style}></span>
  )
}

export default Loader
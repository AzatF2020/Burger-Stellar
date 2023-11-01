import {FC, ReactNode, useEffect, useRef} from 'react';
import styles from "./style.module.scss"
import {useNavigate} from "react-router-dom";

interface IModal {
  children?: ReactNode;
}

export const Modal: FC<IModal> = ({children}) => {
  const innerRef = useRef<null | HTMLDivElement>(null);
  const navigate = useNavigate()

  useEffect(() => {
    const closeModal = (event: KeyboardEvent) => {
      if(event.key === "Escape") {
        return navigate(-1)
      }
    }

    window.addEventListener("keydown", closeModal)

    return () => {
      window.removeEventListener("keydown", closeModal)
    }
  }, [innerRef.current]);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__inner} ref={innerRef}>
        {children}
      </div>
    </div>
  );
};



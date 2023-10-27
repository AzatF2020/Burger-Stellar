import styles from "./style.module.scss"
import {useCallback, useState} from "react";

const Tab = ({...args}) => {
    const [tabsValues] = useState<string[]>(["Булки", "Соусы", "Начинки"])
    const [currentTab, setCurrentTab] = useState<string>(tabsValues[0])

    const setActiveClassName = useCallback((buttonValue: string) => {
      return currentTab === buttonValue ? styles.tab__button_active : styles.tab__button
    }, [currentTab])

    const scrollToBlock = useCallback((index: number) => {
      args[index].current.scrollIntoView({behavior: "smooth"})
    }, [args])

    return (
      <div className={styles.tab}>
        {tabsValues.map((buttonValue: string, index: number) => (
          <button
            key={index}
            className={setActiveClassName(buttonValue)}
            onClick={() => {
              scrollToBlock(index)
              setCurrentTab(buttonValue)
            }}
          >{buttonValue}</button>
        ))}
      </div>
    );
};

export default Tab


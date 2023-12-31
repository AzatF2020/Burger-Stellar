import styles from "./style.module.scss"
import useSWR from 'swr'
import Tab from "../Tab/Tab.tsx";
import Ingredient from "../../ui/Ingredient/Ingredient.tsx";
import {useCallback, useEffect, useState, memo, useRef} from "react"
import {url} from "../../helpers/constants/constants.ts";
import {fetcher} from "../../helpers/fetchers/fetcher.ts";
import {TIngredient, TIngredientData} from "../../services/types/data.ts";

const BurgerConstructor = () => {
  const {data} = useSWR<TIngredient>(`${url}/ingredients`, fetcher)

  const [buns, setBuns] = useState<TIngredientData[] | []>([])
  const [main, setMain] = useState<TIngredientData[] | []>([])
  const [sauces, setSauces] = useState<TIngredientData[] | []>([])

  const bunRef = useRef(null)
  const sauceRef = useRef(null)
  const mainRef = useRef(null)

  const getValues = useCallback((type: "bun" | "main" | "sauce"): TIngredientData[] => {
    return data?.data.filter((item: TIngredientData) => item?.type === type)!
  }, [data?.data])

  useEffect(() => {
      setMain(() => getValues("main"))
      setSauces(() => getValues("sauce"))
      setBuns(() => getValues("bun"))
  }, [data?.success, setBuns]);

  return (
    <div className={styles.construct}>
      <Tab {...[bunRef, sauceRef, mainRef]}/>
      <ul className={styles.construct__container}>
        <li className={styles.construct__list}>
          <h2 className={styles.construct__title} ref={bunRef}>Булки</h2>
          <div className={styles.construct__block}>
            {buns?.map((ingredient: TIngredientData) => (
              <Ingredient
                item={ingredient}
                key={ingredient._id}
                name={ingredient?.name}
                cost={ingredient?.price}
                image={ingredient?.image}
              />
            ))}
          </div>
        </li>
        <li className={styles.construct__list}>
          <h2 className={styles.construct__title} ref={sauceRef}>Соусы</h2>
          <div className={styles.construct__block}>
            {sauces?.map((ingredient: TIngredientData) => (
              <Ingredient
                item={ingredient}
                key={ingredient._id}
                name={ingredient?.name}
                cost={ingredient?.price}
                image={ingredient?.image}
              />
            ))}
          </div>
        </li>
        <li className={styles.construct__list}>
          <h2 className={styles.construct__title} ref={mainRef}>Начинки</h2>
          <div className={styles.construct__block}>
            {main?.map((ingredient: TIngredientData) => (
              <Ingredient
                item={ingredient}
                key={ingredient._id}
                name={ingredient?.name}
                cost={ingredient?.price}
                image={ingredient?.image}
              />
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default memo(BurgerConstructor)



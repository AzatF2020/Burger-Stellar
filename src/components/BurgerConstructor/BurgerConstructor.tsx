import styles from "./style.module.scss"
import useSWR from 'swr'
import Tab from "../Tab/Tab.tsx";
import Ingredient from "../../ui/Ingredient/Ingredient.tsx";
import {useCallback, useEffect, useState} from "react"
import {url} from "../../helpers/constants/constants.ts";
import {fetcher} from "../../helpers/fetchers/fetcher.ts";
import type {TIngredientData, TIngredient} from "../../helpers/types/types.ts";

const BurgerConstructor = () => {
  const {data} = useSWR<TIngredient>(`${url}/ingredients`, fetcher)

  const [buns, setBuns] = useState<TIngredientData[] | []>([])
  const [main, setMain] = useState<TIngredientData[] | []>([])
  const [sauces, setSauces] = useState<TIngredientData[] | []>([])

  const getValues = useCallback((type: "bun" | "main" | "sauce"): TIngredientData[] => {
    return data?.data.filter((item: TIngredientData) => item?.type === type)!
  }, [data?.data])

  useEffect(() => {
    if(data?.success) {
      setBuns(() => getValues("bun"))
      setMain(() => getValues("main"))
      setSauces(() => getValues("sauce"))
    }
  }, [data?.success, setBuns]);

  return (
    <div className={styles.construct}>
      <Tab/>
      <ul className={styles.construct__container}>
        <li className={styles.construct__list}>
          <h2 className={styles.construct__title}>Булки</h2>
          <div className={styles.construct__block}>
            {buns?.map((ingredient: TIngredientData) => (
              <Ingredient
                key={ingredient._id}
                name={ingredient?.name}
                cost={ingredient?.price}
                image={ingredient?.image}
              />
            ))}
          </div>
        </li>
        <li className={styles.construct__list}>
          <h2 className={styles.construct__title}>Соусы</h2>
          <div className={styles.construct__block}>
            {sauces?.map((ingredient: TIngredientData) => (
              <Ingredient
                key={ingredient._id}
                name={ingredient?.name}
                cost={ingredient?.price}
                image={ingredient?.image}
              />
            ))}
          </div>
        </li>
        <li className={styles.construct__list}>
          <h2 className={styles.construct__title}>Начинки</h2>
          <div className={styles.construct__block}>
            {main?.map((ingredient: TIngredientData) => (
              <Ingredient
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

export default BurgerConstructor



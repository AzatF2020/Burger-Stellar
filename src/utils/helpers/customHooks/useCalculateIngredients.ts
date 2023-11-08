import type {TIngredientData} from "../../../services/types/data.ts";
import {TBunsState} from "../../../services/types";
import {useMemo} from "react";

export const useCalculateIngredients = (data: TIngredientData[], buns?: TBunsState): {price: number} => {
  const price = useMemo(() => {
    let buttonPrice = Number(buns?.top?.price) * 2
    let countPriceIngredients = data.reduce((accumulator, ingredient) => accumulator + ingredient?.price, 0)

    return (buttonPrice + countPriceIngredients) || countPriceIngredients
  }, [data, buns])

  return { price }
}

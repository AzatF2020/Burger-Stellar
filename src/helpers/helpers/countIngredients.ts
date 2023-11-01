import type {TIngredientData} from "../../services/types/data.ts";

export const countIngredients = (ingredient: TIngredientData, data: TIngredientData[]): number => {
  let count: number = 0;

  const getCount = (): number => {
    data?.forEach((item: TIngredientData) => {
      if(item?._id === ingredient?._id) {
        count +=1;
      }
    })

    return count;
  };

  return getCount();
};
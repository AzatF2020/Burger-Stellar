import type {TIngredientData} from "../../services/types/data.ts";

export const countIngredients = (ingredient: TIngredientData, data: TIngredientData[]) => {
  let count = 0
  console.log(data)

  data?.map((item) => {
    if(item._id === ingredient?._id) {
      console.log(ingredient)
    }
  })

  return count
}
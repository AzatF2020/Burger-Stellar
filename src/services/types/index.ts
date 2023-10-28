import type {TIngredientData} from "./data.ts"

export type TBunsState = {
  top: TIngredientData | null;
  bottom: TIngredientData | null;
}
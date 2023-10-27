import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {TIngredient, TIngredientData} from "../types/data.ts";
import {TBunsState} from "../types";
import {fetchIngredients} from "../thunks/fetchIngredients.ts";
import { v4 as uuidv4 } from "uuid";

type TInitialState = {
  buns: TBunsState;
  ingredientsFetch: TIngredientData[] | [];
  ingredientsOrder: TIngredientData[] | [];
}

const initialState: TInitialState = {
  buns: {
    top: null,
    bottom: null,
  },
  ingredientsFetch: [],
  ingredientsOrder: [],
}

const ingredientSlice = createSlice({
  name: "ingredient/slice",
  initialState,
  reducers: {
    addIngredient(state, action) {
      const {_id, type} = action.payload?.item

      let addedIngredients: TIngredientData[] =
        state.ingredientsFetch.filter((ingredient: TIngredientData) => {
          if(type !== "bun" && ingredient._id === _id) {
            return Object.assign(ingredient, {unique_id: uuidv4()})
          }
        })

        state.ingredientsFetch.find((ingredient: TIngredientData) => {
          if(type === "bun" && ingredient._id === _id) {
            state.buns = {
              top: {...ingredient, name: ingredient!?.name + " (верх)"},
              bottom: {...ingredient, name: ingredient!?.name + " (низ)"}
            }
          }
        })

      state.ingredientsOrder = [
        ...state.ingredientsOrder,
        ...addedIngredients
      ]
    },
    removeIngredient(state, action: PayloadAction<number | string>) {
      let removedIngredient: TIngredientData[] =
        state.ingredientsOrder.filter((ingredient: TIngredientData) => {
          return ingredient?.unique_id !== action.payload
        })

      state.ingredientsOrder = [
        ...removedIngredient
      ]
    },
    moveIngredient(state, action) {
      const ingredientsOrder = [...state.ingredientsOrder];
      ingredientsOrder.splice(action.payload?.hoverIndex, 0, ingredientsOrder.splice(action.payload?.dragIndex, 1)[0]);
      state.ingredientsOrder = ingredientsOrder
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredients.fulfilled, (state, action: PayloadAction<TIngredient>) => {
        state.ingredientsFetch = action.payload?.data
      })
  }
})

export {ingredientSlice}
export const { addIngredient, removeIngredient, moveIngredient } = ingredientSlice.actions


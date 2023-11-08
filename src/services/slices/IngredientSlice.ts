import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {TIngredient, TIngredientData} from "../types/data.ts";
import {TBunsState} from "../types";
import {fetchIngredients} from "../thunks/fetchIngredients.ts";
import { v4 as uuidv4 } from "uuid";

type TInitialState = {
  buns: TBunsState;
  ingredientsFetch: TIngredient | null;
  ingredientsOrder: TIngredientData[] | [];
  ingredientsOrderWithBuns: TIngredientData[] | [];
}

export const initialState: TInitialState = {
  buns: {
    top: null,
    bottom: null,
  },
  ingredientsFetch: null,
  ingredientsOrder: [],
  ingredientsOrderWithBuns: []
}

const ingredientSlice = createSlice({
  name: "ingredient/slice",
  initialState,
  reducers: {
    addIngredient(state, action) {
      const {_id, type} = action.payload?.item

      let addedIngredients: TIngredientData[] =
        state.ingredientsFetch?.data.filter((ingredient: TIngredientData) => {
          if(type !== "bun" && ingredient._id === _id) {
            return Object.assign(ingredient, {unique_id: uuidv4()})
          }
        })!

        state.ingredientsFetch?.data.find((ingredient: TIngredientData) => {
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

      state.ingredientsOrderWithBuns = [
        ...state.ingredientsOrder,
        {...state.buns.top!},
        {...state.buns.bottom!},
      ]
    },
    removeIngredient(state, action: PayloadAction<number | string>) {
      const removeIngredientFromState = (array: TIngredientData[]) => {
        return array?.filter((ingredient: TIngredientData) => {
          return ingredient?.unique_id !== action.payload
        })
      }

      state.ingredientsOrder = [
        ...removeIngredientFromState(state.ingredientsOrder)
      ]

      state.ingredientsOrderWithBuns = [
        ...removeIngredientFromState(state.ingredientsOrderWithBuns)
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
        state.ingredientsFetch = action.payload
      })
  }
})

export {ingredientSlice}
export const { addIngredient, removeIngredient, moveIngredient } = ingredientSlice.actions


import {RootState} from "../index.ts";
import {createSelector} from "@reduxjs/toolkit";

export const ingredientsFetch = (state: RootState) => state.ingredientSlice.ingredientsFetch
export const allOrders = (state: RootState) => state.ordersSlice.orders

export const ordersSelectorFeed = createSelector(
  [ingredientsFetch, allOrders],
  (ingredientsFetch, allOrders) => {

    const ingredientsOrderMap = new Map()

    ingredientsFetch?.data?.forEach((order) => {
      ingredientsOrderMap.set(order._id, order)
    })

    const orders = allOrders?.feed?.map(({...order}) => {
      const ordersIngredient = order?.ingredients.map((ingredientID: string | null) => {
        return ingredientsOrderMap.get(ingredientID);
      })

      order.feed_ingredients = [...ordersIngredient]!
      order.price = order.feed_ingredients.reduce((accumulator, ingredientValue) => accumulator + ingredientValue?.price, 0)
      return order
    })

    return {
      orders
    }
  }
)


import {RootState} from "../index.ts";
import {createSelector} from "@reduxjs/toolkit";

export const ingredientsFetch = (state: RootState) => state.ingredientSlice.ingredientsFetch
export const allOrders = (state: RootState) => state.ordersSlice.orders

export const OrderStatus: {[keyof: string]: string} = {
  "done": "Выполнен",
  "pending": "В процессе",
  "created": "Создан"
}

export const serverStatus = {
  "done": "done",
  "pending": "pending",
  "created": "created"
}

export const ordersSelector = createSelector(
  [ingredientsFetch, allOrders],
  (ingredientsFetch, allOrders) => {

    const ingredientsOrderMap = new Map()

    ingredientsFetch?.data?.forEach((order) => {
      ingredientsOrderMap.set(order._id, order)
    })

    function getIngredientsOrder(order) {
      const ordersIngredient = order?.ingredients.map((ingredientID: string | null) => {
        return ingredientsOrderMap.get(ingredientID);
      })
      order.feed_ingredients = [...ordersIngredient]!
    }

    function setOrderPrice(order) {
      order.price = order?.feed_ingredients!.reduce((accumulator: any, ingredientValue: any) =>
        accumulator + ingredientValue?.price, 0)
    }

    const ordersFeed = allOrders?.feed?.map(({...order}) => {
      getIngredientsOrder(order)
      setOrderPrice(order)

      return order
    })

    const myOrders = allOrders?.my?.map(({...order}) => {
      getIngredientsOrder(order)
      setOrderPrice(order)

      return order
    })


    return {
      ordersFeed,
      myOrders
    }
  }
)

export const ordersSelectorsFeedDone = createSelector(
  [allOrders],
  (allOrders) => {
    const sizeOrderTotal: number = 10
    const ordersInfo: {[keyof: string]: number[]} = {
      done: [],
      pending: [],
    }

    allOrders?.feed.forEach((order) => {
        if(serverStatus.pending === order.status && ordersInfo.pending.length < sizeOrderTotal) {
          ordersInfo.pending.push(order.number)
        }
        if(serverStatus.done === order.status && ordersInfo.done.length < sizeOrderTotal) {
          ordersInfo.done.push(order.number)
        }
    })
    return {
      ordersInfo
    }
  }
)


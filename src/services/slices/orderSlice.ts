import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import type {TIngredientData} from "../types/data.ts";

export type OrdersState = {
  orders: {
    feed: Array<TOrder>,
    my: Array<TOrder>
  }
  wsConnected: {
    feed: boolean,
    my: boolean
  }
  wsError: {
    feed: Event | null,
    my: Event | null
  }
  wsLoading: {
    feed: boolean,
    my: boolean
  }
  total: {
    feed: number,
    my: number
  }
  totalToday: {
    feed: number,
    my: number
  }
}

const initialState: OrdersState = {
  orders: {
    feed: [],
    my: []
  },
  wsConnected: {
    feed: false,
    my: false
  },
  wsError: {
    feed: null,
    my: null
  },
  wsLoading: {
    feed: false,
    my: false
  },
  total: {
    feed: 0,
    my: 0
  },
  totalToday: {
    feed: 0,
    my: 0
  }
}

export type TOrder = {
  _id: string
  ingredients: Array<string | null>;
  feed_ingredients: Array<TIngredientData> | undefined,
  price: number | undefined;
  name: string
  status: 'done' | 'pending' | 'created'
  number: number
  createdAt: string
  updatedAt: string
}

export type TMessageOrders = {
  success: boolean
  total: number
  totalToday: number
  orders: Array<TOrder>
}

export type TUpdateOrders = {
  orders: Array<TOrder>
  type: 'feed' | 'my'
}

export type TWSSError = {
  type: 'feed' | 'my'
  error: Event
}

export type TExtendedOrder = Omit<TOrder, 'ingredients'> & {
  ingredients: Array<any>
  ingredientsPrice: number
}

export type TOrdersCnt = {
  total: number
  totalToday: number
}

export type TUpdateOrdersCnt = {
  cnt: TOrdersCnt
  type: 'feed' | 'my'
}

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    wsInit: (state, action: PayloadAction<'my' | 'feed'>) => {
      state.wsLoading[action.payload] = true
    },
    onOpen: (state, action: PayloadAction<'my' | 'feed'>) => {
      state.wsLoading[action.payload] = false
      state.wsConnected[action.payload] = true
    },
    onError: (state, action: PayloadAction<TWSSError>) => {
      state.wsLoading[action.payload.type] = false
      state.wsError[action.payload.type] = action.payload.error
    },
    onClose: (state, action: PayloadAction<'my' | 'feed'>) => {
      state.wsLoading[action.payload] = false
      state.wsConnected[action.payload] = false
    },
    updateOrders: (state, action: PayloadAction<TUpdateOrders>) => {
      state.orders[action.payload.type] = action.payload.orders
    },
    setOrdersCnt: (state, action: PayloadAction<TUpdateOrdersCnt>) => {
      state.total[action.payload.type] = action.payload.cnt.total
      state.totalToday[action.payload.type] = action.payload.cnt.totalToday
    }
  }
})

export {ordersSlice}
export const {wsInit, onOpen, onError, onClose, updateOrders,setOrdersCnt} = ordersSlice.actions
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {ingredientSlice} from "./slices/IngredientSlice.ts"
import {authSlice} from "./slices/authSlice.ts"
import {ordersSlice} from "./slices/orderSlice.ts"
import {socketMiddleware, SocketType} from "./middleware/socket.middleware.ts";
import {onOpen, onError, onClose, wsInit, setOrdersCnt, updateOrders} from "./slices/orderSlice.ts";

const FEED_URL = 'wss://norma.nomoreparties.space/orders/all'
const MY_URL = 'wss://norma.nomoreparties.space/orders'

const wsActions = {onOpen, onError, onClose, wsInit, setOrdersCnt, updateOrders}

const rootReducer = combineReducers({
    ingredientSlice: ingredientSlice.reducer,
    authSlice: authSlice.reducer,
    ordersSlice: ordersSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }).concat(
    socketMiddleware({
      wsUrl: FEED_URL,
      entityType: SocketType.feed,
      wsActions: wsActions
    }),
    socketMiddleware({
      wsUrl: MY_URL,
      entityType: SocketType.my,
      wsActions: wsActions
    }),
  )
})

export type RootState = ReturnType<typeof rootReducer>
export type FetchDispatch = typeof store.dispatch
export type AppStore = ReturnType<any>
export type AppDispatch = AppStore['dispatch']
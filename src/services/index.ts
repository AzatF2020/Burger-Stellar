import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { ingredientSlice } from "./slices/IngredientSlice.ts"
import { authSlice } from "./slices/authSlice.ts"

const rootReducer = combineReducers({
    ingredientSlice: ingredientSlice.reducer,
    authSlice: authSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<any>
export type AppDispatch = AppStore['dispatch']
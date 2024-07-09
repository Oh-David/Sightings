import {configureStore} from "@reduxjs/toolkit"
import userItemsReducer from "./ProductSlice"

const store = configureStore({
  reducer: {
    userItems: userItemsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

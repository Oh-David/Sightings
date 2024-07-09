import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {mockProducts, mockUserProducts} from "../Mock"

export interface Product 
{
  id: string
  name: string
  image: string
  description: string
  tradeFor: string
}

interface ProductState
{
  userProducts: Product[]
  products: Product[]
}

const initialState: ProductState =
{
  userProducts: mockUserProducts,
  products: mockProducts,
}

const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addUserItem: (state, action: PayloadAction<Product>) =>
    {
      state.userProducts.push(action.payload)
    },
    removeUserItem: (state, action: PayloadAction<string>) =>
    {
      state.userProducts = state.userProducts.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export const {addUserItem, removeUserItem} = ProductSlice.actions
export default ProductSlice.reducer

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchProductsNotOwnedByUser} from './Api/ApiService'
import {mockProducts, mockUserProducts} from '../Mock'
import {Product} from './Product'

interface ProductState
{
  userProducts: Product[]
  products: Product[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: ProductState = {
  userProducts: mockUserProducts,
  products: mockProducts,
  status: 'idle',
  error: null,
}

const productSlice = createSlice({
  name: 'products',
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
  extraReducers: (builder) =>
  {
    builder
      .addCase(fetchProductsNotOwnedByUser.pending, (state) =>
      {
        state.status = 'loading'
      })
      .addCase(fetchProductsNotOwnedByUser.fulfilled, (state, action: PayloadAction<Product[]>) =>
      {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(fetchProductsNotOwnedByUser.rejected, (state, action) =>
      {
        state.status = 'failed'
        state.error = action.payload || 'Failed to fetch products'
      })
  },
})

export const {addUserItem, removeUserItem} = productSlice.actions

export default productSlice.reducer
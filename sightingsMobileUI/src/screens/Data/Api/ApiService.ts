import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {Product} from '../Product'

const BASE_URL = 'https://barterapi.azurewebsites.net/api'

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const getUserById = async (userId: string) =>
{
    try
    {
        const response = await api.get(`/Users/${userId}`)
        return response.data
    } catch (error)
    {
        console.error('Error fetching user:', error)
        throw error
    }
}

export const fetchProductsNotOwnedByUser = createAsyncThunk<Product[], string, {rejectValue: string}>(
    'products/fetchProductsNotOwnedByUser',
    async (ownerId, thunkAPI) =>
    {
        try
        {
            const response = await axios.get<Product[]>(`${BASE_URL}/Products/NotOwnedByUser/${ownerId}`)
            return response.data
        } catch (error)
        {
            return thunkAPI.rejectWithValue('Failed to fetch products')
        }
    }
)
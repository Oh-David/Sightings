import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {Product} from '../Models/Product'
import {Bid} from '../Models/Bid'
import {AddProductRequest} from './AddProductRequest'
import {RemoveProductRequest} from './RemoveProductRequest'

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

export const fetchProductsByOwner = createAsyncThunk<Product[], string, {rejectValue: string}>(
    'products/fetchProductsByOwner',
    async (ownerId, thunkAPI) =>
    {
        try
        {
            const response = await axios.get<Product[]>(`${BASE_URL}/Products/ByOwner/${ownerId}`)
            return response.data
        } catch (error)
        {
            return thunkAPI.rejectWithValue('Failed to fetch products by owner')
        }
    }
)

export const addBid = createAsyncThunk<number, AddBidRequest, {rejectValue: string}>(
    'bids/addBid',
    async (request, thunkAPI) =>
    {
        try
        {
            const response = await axios.post<number>(`${BASE_URL}/bids`, request)
            return response.data
        } catch (error)
        {
            return thunkAPI.rejectWithValue('Failed to add bid')
        }
    }
)

export const removeBid = createAsyncThunk<number, number, {rejectValue: string}>(
    'bids/removeBid',
    async (bidId, thunkAPI) =>
    {
        try
        {
            await axios.delete(`${BASE_URL}/bids/${bidId}`)
            return bidId
        } catch (error)
        {
            return thunkAPI.rejectWithValue('Failed to remove bid')
        }
    }
)

export const fetchAllBids = createAsyncThunk<Bid[], void, {rejectValue: string}>(
    'bids/fetchAllBids',
    async (_, thunkAPI) =>
    {
        try
        {
            const response = await axios.get<Bid[]>(`${BASE_URL}/bids`)
            return response.data
        } catch (error)
        {
            return thunkAPI.rejectWithValue('Failed to fetch bids')
        }
    }
)

export const addProduct = createAsyncThunk<string, AddProductRequest, {rejectValue: string}>(
    'products/addProduct',
    async (request, thunkAPI) =>
    {
        console.log('request:', request)

        try
        {
            const response = await axios.post<string>(`${BASE_URL}/Products`, request)
            return response.data
        } catch (error)
        {
            return thunkAPI.rejectWithValue('Failed to add product')
        }
    }
)

export const removeProduct = createAsyncThunk<void, RemoveProductRequest, {rejectValue: string}>(
    'products/removeProduct',
    async (request, thunkAPI) =>
    {
        try
        {
            await axios.delete(`${BASE_URL}/Products/${request.id}`)
        } catch (error)
        {
            return thunkAPI.rejectWithValue('Failed to remove product')
        }
    }
)
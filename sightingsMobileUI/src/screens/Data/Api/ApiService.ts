import axios from 'axios'

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

export const getProductsByOwner = async (ownerId: string) =>
{
    try
    {
        const response = await api.get(`/Products/ByOwner/${ownerId}`)
        return response.data
    } catch (error)
    {
        console.error('Error fetching products by owner:', error)
        throw error
    }
}

export const getProductsNotOwnedByUser = async (ownerId: string) =>
{
    try
    {
        const response = await api.get(`/Products/NotOwnedByUser/${ownerId}`)
        return response.data
    } catch (error)
    {
        console.error('Error fetching products not owned by user:', error)
        throw error
    }
}
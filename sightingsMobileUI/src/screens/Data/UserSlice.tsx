import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import {User} from './Models/User'
import {mockCurrentUser} from '../Mock'

interface UserState
{
    currentUser: User | null
    users: User[]
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: UserState = {
    currentUser: mockCurrentUser,
    users: [],
    status: 'idle',
    error: null,
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User>) =>
        {
            state.currentUser = action.payload
        },
        clearCurrentUser: (state) =>
        {
            state.currentUser = null
        },
        addUser: (state, action: PayloadAction<User>) =>
        {
            state.users.push(action.payload)
        },
        removeUser: (state, action: PayloadAction<string>) =>
        {
            state.users = state.users.filter(user => user.id !== action.payload)
        },
    }
})

export const {setCurrentUser, clearCurrentUser, addUser, removeUser} = userSlice.actions

export default userSlice.reducer
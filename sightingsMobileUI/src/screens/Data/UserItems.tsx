import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userItems } from "../Mock";

export interface UserItem {
  id: string;
  name: string;
  image: string;
  description: string;
  tradeFor: string;
}

interface UserItemsState {
  items: UserItem[];
}

const initialState: UserItemsState = {
  items: userItems,
};

const userItemsSlice = createSlice({
  name: "userItems",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<UserItem>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = userItemsSlice.actions;
export default userItemsSlice.reducer;

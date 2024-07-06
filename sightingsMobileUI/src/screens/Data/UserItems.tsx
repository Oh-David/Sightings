import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { allItems, userBids, userItems } from "../Mock";

export interface UserItem {
  id: string;
  name: string;
  image: string;
  description: string;
  tradeFor: string;
}

export interface Bid {
  id: string;
  itemOffered: UserItem;
  itemRequested: UserItem;
}

interface UserItemsState {
  items: UserItem[];
  allItems: UserItem[];
  userBids: Bid[];
}

const initialState: UserItemsState = {
  items: userItems,
  allItems: allItems,
  userBids: userBids,
};

const userItemsSlice = createSlice({
  name: "userItems",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<UserItem>) => {
      state.items.push(action.payload);
      state.allItems.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.allItems = state.allItems.filter(
        (item) => item.id !== action.payload
      );
    },
    addBid: (state, action: PayloadAction<Bid>) => {
      state.userBids.push(action.payload);
    },
    removeBid: (state, action: PayloadAction<string>) => {
      state.userBids = state.userBids.filter(
        (bid) => bid.id !== action.payload
      );
    },
    addGeneralItem: (state, action: PayloadAction<UserItem>) => {
      state.allItems.push(action.payload);
    },
    removeGeneralItem: (state, action: PayloadAction<string>) => {
      state.allItems = state.allItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem, addBid, addGeneralItem } =
  userItemsSlice.actions;
export default userItemsSlice.reducer;

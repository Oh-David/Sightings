import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserItem {
  id: string;
  name: string;
  image: string;
}

export const userItems: UserItem[] = [
  {
    id: "1",
    name: "Electric scooter",
    image:
      "https://images.pexels.com/photos/122477/pexels-photo-122477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "2",
    name: "Keyboard piano",
    image:
      "https://images.pexels.com/photos/164935/pexels-photo-164935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "3",
    name: "High-end smartphone",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "4",
    name: "Drone",
    image:
      "https://images.pexels.com/photos/1506991/pexels-photo-1506991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

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

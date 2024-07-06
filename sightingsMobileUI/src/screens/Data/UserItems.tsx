import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserItem {
  id: string;
  name: string;
  image: string;
  description: string;
  tradeFor: string;
}

export const userItems: UserItem[] = [
  {
    id: "1",
    name: "Bicycle",
    description: "A nice road bike.",
    image:
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Electric scooter",
  },
  {
    id: "2",
    name: "Guitar",
    description: "An acoustic guitar.",
    image:
      "https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Keyboard piano",
  },
  {
    id: "3",
    name: "Laptop",
    description: "A powerful gaming laptop.",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "High-end smartphone",
  },
  {
    id: "4",
    name: "Camera",
    description: "A DSLR camera.",
    image:
      "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Drone",
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

import { Product } from "./Data/ProductSlice";

export const itemNames = [
  "Laptop",
  "Smartphone",
  "Headphones",
  "Backpack",
  "Water Bottle",
  "Notebook",
  "Pen",
  "Sunglasses",
  "Camera",
  "Charger",
];

export const itemDescriptions = [
  "A powerful device.",
  "A handy gadget.",
  "High-quality sound.",
  "A sturdy backpack.",
  "Stay hydrated.",
  "Keep your notes.",
  "For smooth writing.",
  "Protect your eyes.",
  "Capture moments.",
  "Stay charged.",
];

export const itemTradeFor = [
  "Tablet",
  "Smartwatch",
  "Speakers",
  "Travel bag",
  "Fitness tracker",
  "E-book reader",
  "Stylus pen",
  "Hat",
  "Lens",
  "Power bank",
];

export const itemImages = [
  "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1187344/pexels-photo-1187344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/914912/pexels-photo-914912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];

export const userItems: Product[] = [
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

export const allItems: Product[] = [
  {
    id: "5",
    name: "Smartphone",
    description: "A handy gadget.",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Smartwatch",
  },
  {
    id: "6",
    name: "Headphones",
    description: "High-quality sound.",
    image:
      "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Speakers",
  },
  {
    id: "7",
    name: "Backpack",
    description: "A sturdy backpack.",
    image:
      "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Travel bag",
  },
  {
    id: "8",
    name: "Water Bottle",
    description: "Stay hydrated.",
    image:
      "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Fitness tracker",
  }
];

export const productItems = [
  {
    id: "100",
    name: "Laptop",
    description: "A powerful device.",
    tradeFor: "Tablet",
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "101",
    name: "Smartphone",
    description: "A handy gadget.",
    tradeFor: "Smartwatch",
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "102",
    name: "Headphones",
    description: "High-quality sound.",
    tradeFor: "Speakers",
    image: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "103",
    name: "Backpack",
    description: "A sturdy backpack.",
    tradeFor: "Travel bag",
    image: "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "104",
    name: "Water Bottle",
    description: "Stay hydrated.",
    tradeFor: "Fitness tracker",
    image: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "105",
    name: "Notebook",
    description: "Keep your notes.",
    tradeFor: "E-book reader",
    image: "https://images.pexels.com/photos/1187344/pexels-photo-1187344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "106",
    name: "Pen",
    description: "For smooth writing.",
    tradeFor: "Stylus pen",
    image: "https://images.pexels.com/photos/5088179/pexels-photo-5088179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "107",
    name: "Sunglasses",
    description: "Protect your eyes.",
    tradeFor: "Hat",
    image: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "108",
    name: "Camera",
    description: "Capture moments.",
    tradeFor: "Lens",
    image: "https://images.pexels.com/photos/167832/pexels-photo-167832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "109",
    name: "Charger",
    description: "Stay charged.",
    tradeFor: "Power bank",
    image: "https://images.pexels.com/photos/914912/pexels-photo-914912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];
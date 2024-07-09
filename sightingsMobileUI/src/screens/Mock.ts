import {Bid} from "./Data/BidSlice"
import { Product } from "./Data/ProductSlice";

export const mockUserProducts: Product[] = [
  {
    id: "1001",
    name: "Bicycle",
    description: "A nice road bike.",
    image:
      "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Electric scooter",
  },
  {
    id: "1002",
    name: "Guitar",
    description: "An acoustic guitar.",
    image:
      "https://images.pexels.com/photos/165971/pexels-photo-165971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Keyboard piano",
  },
  {
    id: "1003",
    name: "Laptop",
    description: "A powerful gaming laptop.",
    image:
      "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "High-end smartphone",
  },
  {
    id: "1004",
    name: "Camera",
    description: "A DSLR camera.",
    image:
      "https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Drone",
  },
];

export const mockProducts: Product[] = [
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
      "https://images.pexels.com/photos/3731256/pexels-photo-3731256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Travel bag",
  },
  {
    id: "8",
    name: "Water Bottle",
    description: "Stay hydrated.",
    image:
      "https://images.pexels.com/photos/1188649/pexels-photo-1188649.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Fitness tracker",
  },
  {
    id: "10",
    name: "Gaming Console",
    description: "Enjoy your favorite games.",
    image:
      "https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Virtual Reality Headset",
  },
  {
    id: "11",
    name: "E-Reader",
    description: "Read books on the go.",
    image:
      "https://images.pexels.com/photos/1475276/pexels-photo-1475276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Books",
  },
  {
    id: "12",
    name: "Desk Lamp",
    description: "Brighten up your workspace.",
    image:
      "https://images.pexels.com/photos/568290/pexels-photo-568290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Office Chair",
  },
  {
    id: "14",
    name: "Bluetooth Speaker",
    description: "Portable sound system.",
    image:
      "https://images.pexels.com/photos/4062514/pexels-photo-4062514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Headphones",
  }
];

export const mockPostProducts = [
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
    id: "109",
    name: "Charger",
    description: "Stay charged.",
    tradeFor: "Power bank",
    image: "https://images.pexels.com/photos/914912/pexels-photo-914912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "114",
    name: "Air Conditioner",
    description: "Cool down your home.",
    image:
      "https://images.pexels.com/photos/1374448/pexels-photo-1374448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Heater",
  },
  {
    id: "115",
    name: "Vacuum Cleaner",
    description: "Keep your floors clean.",
    image:
      "https://images.pexels.com/photos/4107286/pexels-photo-4107286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Carpet Cleaner",
  },
  {
    id: "116",
    name: "Refrigerator",
    description: "Keep your food fresh.",
    image:
      "https://images.pexels.com/photos/4003794/pexels-photo-4003794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Freezer",
  },
  {
    id: "117",
    name: "Microwave Oven",
    description: "Heat your food quickly.",
    image:
      "https://images.pexels.com/photos/5591849/pexels-photo-5591849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Toaster Oven",
  },
  {
    id: "118",
    name: "Dishwasher",
    description: "Effortless dish cleaning.",
    image:
      "https://images.pexels.com/photos/4107305/pexels-photo-4107305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Washing Machine",
  },
  {
    id: "119",
    name: "Blender",
    description: "Blend your favorite drinks.",
    image:
      "https://images.pexels.com/photos/8845075/pexels-photo-8845075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Food Processor",
  },
  {
    id: "120",
    name: "Coffee Maker",
    description: "Brew your morning coffee.",
    image:
      "https://images.pexels.com/photos/714563/pexels-photo-714563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Espresso Machine",
  },
  {
    id: "121",
    name: "Electric Kettle",
    description: "Boil water quickly.",
    image:
      "https://images.pexels.com/photos/7176004/pexels-photo-7176004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tradeFor: "Tea Maker",
  }
];

export const mockBids: Bid[] = [
  { product1Id: '5', product2Id: '6' }, // Smartphone <-> Headphones
  { product1Id: '7', product2Id: '8' }, // Backpack <-> Water Bottle
  { product1Id: '10', product2Id: '11' }, // Gaming Console <-> E-Reader
  { product1Id: '12', product2Id: '14' }, // Desk Lamp <-> Bluetooth Speaker
];

export const mockAppLogo = "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

export const mockProfileImage = "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
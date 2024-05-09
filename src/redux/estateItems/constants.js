import { nanoid } from "nanoid";

export const initialState = {
  items: [
    {
      id: nanoid(),
      picture: "path/to/image",
      name: "House",
      price: "$500,000",
      description: "Beautiful house description",
      category: "Commerce",
    },
    {
      id: nanoid(),
      picture: "path/to/image",
      name: "Apartment",
      price: "$300,000",
      description: "Cozy apartment description",
      category: "Buy",
    },
    {
      id: nanoid(),
      picture: "path/to/image",
      name: "Villa",
      price: "$1,000,000",
      description: "Luxurious villa description",
      category: "Rent",
    },
    {
      id: nanoid(),
      picture: "path/to/image",
      name: "Condo",
      price: "$400,000",
      description: "Modern condo description",
      category: "New Building",
    },
  ],
};

export const statusFilterbyCategory = Object.freeze({
  none: "none",
  buy: "buy",
  rent: "rent",
  commerce: "commerce",
  newbuild: "newbuild",
});

export const statusFilterbySelected = Object.freeze({
  minprice: "minprice",
  maxprice: "maxprice",
  minm: "minm",
  maxm: "maxm",
  rooms: "rooms",
  teritory: "teritory",
});

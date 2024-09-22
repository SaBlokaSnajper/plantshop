import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      // Find if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );

      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If the item is new, add it with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter((item) => item.name !== name); // Remove item
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

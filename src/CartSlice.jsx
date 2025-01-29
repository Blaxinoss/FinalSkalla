import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, description, image, cost } = action.payload

      const ItemExist = state.items.find((item) => item.name === name)
      if (ItemExist) {
        ItemExist["quantity"]++;
      } else {
        state.items.push({ name, description, image, cost, quantity: 1 })
      }
    },

    removeItem: (state, action) => {
      const { name } = action.payload;
      const ItemToRemove = state.items.find(item => item.name === name)
      if (ItemToRemove) {
        state.items = state.items.filter(item => item.name !== name);
      } else {
        return "not found"
      }
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }

    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

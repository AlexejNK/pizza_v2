import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = [];
      state.items.push( ...action.payload );
    },
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;

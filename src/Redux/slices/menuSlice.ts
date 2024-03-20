import { createSlice } from '@reduxjs/toolkit';

const initialState = { open: false };

const menuSlice = createSlice({
  name: 'hamburgerMenu',
  initialState,
  reducers: {
    open(state) {
      state.open = true;
    },
    close(state) {
      state.open = false;
    },
  },
});

export const { open, close } = menuSlice.actions;

export default menuSlice.reducer;

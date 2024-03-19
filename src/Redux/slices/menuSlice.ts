import { createSlice } from '@reduxjs/toolkit';

type StateType = { open: boolean };
const initialState = { open: false };

const menuSlice = createSlice({
  name: 'hamburgerMenu',
  initialState,
  reducers: {
    open(state: StateType) {
      state.open = true;
    },
    close(state: StateType) {
      state.open = false;
    },
  },
});

export const { open, close } = menuSlice.actions;

export default menuSlice.reducer;

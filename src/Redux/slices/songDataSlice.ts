import { createSlice } from '@reduxjs/toolkit';
import { SongObjectType } from '../../types/common/CommonTypes';

type actionType = { type: string; payload: SongObjectType[] };

const initialState: SongObjectType[] | [] = [];

const menuSlice = createSlice({
  name: 'hamburgerMenu',
  initialState,
  reducers: {
    addData: (state: SongObjectType[], action: actionType) => {
      state = [...action.payload];
      return state;
    },
  },
});

export const { addData } = menuSlice.actions;

export default menuSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const displayCounterSlice = createSlice({
  name: 'clicked',
  initialState: true,
  reducers: {
    toggleDisplay: (show: boolean) => !show,
  },
});

export const { reducer } = displayCounterSlice;
export const { toggleDisplay } = displayCounterSlice.actions;

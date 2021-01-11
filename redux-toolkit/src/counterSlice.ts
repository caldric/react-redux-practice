import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (count) => count + 1,
    decrement: (count) => count - 1,
  },
});

export const { reducer } = counterSlice;
export const {
  actions: { increment, decrement },
} = counterSlice;

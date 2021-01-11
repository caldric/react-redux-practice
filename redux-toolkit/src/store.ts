import { configureStore } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './counterSlice';

export const store = configureStore({ reducer: { counter: counterReducer } });

export type RootState = ReturnType<typeof store.getState>;

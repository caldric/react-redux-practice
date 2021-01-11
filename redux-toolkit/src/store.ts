import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer as counterReducer } from './counterSlice';
import { reducer as displayCounterReducer } from './displayCounterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    displayCounter: displayCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

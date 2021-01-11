import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './store';
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
} from './counterSlice';

const App: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>

      <div className="sync-action-creators">
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>

      <div className="async-action-creators">
        <button type="button" onClick={() => dispatch(decrementAsync())}>
          DecrementAsync
        </button>
        <button type="button" onClick={() => dispatch(incrementAsync())}>
          IncrementAsync
        </button>
      </div>
    </div>
  );
};

export default App;

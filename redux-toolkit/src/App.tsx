import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './store';
import { increment, decrement } from './counterSlice';

const App: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch(increment())}>
        Increment
      </button>
    </div>
  );
};

export default App;

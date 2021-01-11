import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './store';
import {
  increment,
  decrement,
  incrementAsync,
  decrementAsync,
} from './counterSlice';
import { toggleDisplay } from './displayCounterSlice';

const App: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter);
  const displayCounter = useSelector(
    (state: RootState) => state.displayCounter
  );
  const dispatch = useDispatch();

  const renderCounter = (): JSX.Element | null => {
    return displayCounter ? <p>Counter: {counter}</p> : null;
  };

  return (
    <div>
      <div className="sync-action-creators">
        <div className="counter-display">
          {renderCounter()}
          <button type="button" onClick={() => dispatch(toggleDisplay())}>
            Toggle Counter Display
          </button>
        </div>

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

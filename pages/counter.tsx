import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InitState, InitValue } from '../store/modules';
import * as counterActions from '../store/modules/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }: InitState) => counter.value);

  const plus = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  const minus = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [dispatch]);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => minus()}>-</button>
      <span>{value}</span>
      <button onClick={() => plus()}>+</button>
    </div>
  );
};

export default Counter;

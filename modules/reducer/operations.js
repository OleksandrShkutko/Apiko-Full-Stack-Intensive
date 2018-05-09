import { increment, decrement } from './actions';

export const setIncrement = amount => (dispatch) => {
  dispatch(increment(amount));
};

export const setDecrement = amount => (dispatch) => {
  dispatch(decrement(amount));
};

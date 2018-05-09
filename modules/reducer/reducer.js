import { handleActions } from 'redux-actions';

import * as types from './types';

const initialState = {
  value: 0,
};

export default handleActions(
  {
    [types.INCREMENT]: (state, action) => ({
      ...state,
      value: state.value + action.payload,
    }),
    [types.DECREMENT]: (state, action) => ({
      ...state,
      value: state.value - action.payload,
    }),
  },
  initialState,
);

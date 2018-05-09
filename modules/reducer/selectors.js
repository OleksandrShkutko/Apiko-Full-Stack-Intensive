import { createSelector } from 'reselect';

const getCounter = state => state.counter;

export const getCounterValue = createSelector(
  getCounter,
  ({ value }) => value,
);


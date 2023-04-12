import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CounterSliceType, CounterType } from '../../../../types/counter/counterTypes';

const initialState: CounterSliceType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => ({ value: state.value - 1 }), //  { state.value -= 1; }
    incrementByAmount: (state, action: PayloadAction<CounterType>) => {
      state.value += action.payload;
    },
    clear: (state) => ({ value: 0 }), // => { state.value = 0; }
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, clear } = counterSlice.actions;

export default counterSlice.reducer;

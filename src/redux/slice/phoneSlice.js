import { createSlice } from '@reduxjs/toolkit';
import phoneState from '../../enum/phoneState';

const phoneSlice = createSlice({
  name: 'phoneState',
  initialState: {
    session: null,
    value: phoneState.idle,
  },
  reducers: {
    idle: (state) => {
      state.value = phoneState.idle;
    },
    calling: (state) => {
      state.value = phoneState.calling;
    },
    ringing: (state) => {
      state.value = phoneState.ringing;
    },
    receiveCall: (state) => {
      state.value = phoneState.receiveCall;
    },
  },
});

export const { idle, calling, receiveCall, ringing } = phoneSlice.actions;
export default phoneSlice.reducer;

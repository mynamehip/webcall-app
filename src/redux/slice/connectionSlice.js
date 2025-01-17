import { createSlice } from '@reduxjs/toolkit';
import connectionState from '../../enum/connectionState';

const connectionSlice = createSlice({
  name: 'connectionState',
  initialState: {
    value: connectionState.pendding,
  },
  reducers: {
    connect: (state) => {
      state.value = connectionState.connected;
    },
    disconnect: (state) => {
      state.value = connectionState.disconnected;
    },
  },
});

export const { connect, disconnect } = connectionSlice.actions;
export default connectionSlice.reducer;

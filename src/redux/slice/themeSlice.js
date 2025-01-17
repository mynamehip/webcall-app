import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: localStorage.getItem('theme') === 'true',
  },
  reducers: {
    change: (state) => {
      state.value = !state.value;
      localStorage.setItem('theme', state.value);
    },
  },
});

export const { change } = themeSlice.actions;
export default themeSlice.reducer;

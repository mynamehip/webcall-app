import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authState',
  initialState: {
    isLoggedIn: localStorage.getItem('login') === 'true',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      localStorage.setItem('login', 'true');
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.setItem('login', 'false');
      state.user = null;
      localStorage.setItem('user', null);
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

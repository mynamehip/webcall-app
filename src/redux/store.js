import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './slice/phoneSlice';
import connectionReducer from './slice/connectionSlice';
import themeReducer from './slice/themeSlice';
import authReducer from './slice/authSlice';

const store = configureStore({
  reducer: {
    phoneState: phoneReducer,
    connectionState: connectionReducer,
    themeState: themeReducer,
    authState: authReducer,
  },
});

export default store;

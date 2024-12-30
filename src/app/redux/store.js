import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import toggleReducer from './sideSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    toggle: toggleReducer,
  },
});

// redux/toggleSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSmallSidebarVisible: false, // الحالة الافتراضية
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleSmallSidebar: (state) => {
      state.isSmallSidebarVisible = !state.isSmallSidebarVisible; // تبديل الحالة
    },
  },
});

export const { toggleSmallSidebar } = toggleSlice.actions;
export default toggleSlice.reducer;

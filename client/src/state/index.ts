import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type InitialStateTypes = {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
};

const initialState: InitialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState: initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setIsDarkMode, setIsSidebarCollapsed } = globalSlice.actions;

export default globalSlice.reducer;

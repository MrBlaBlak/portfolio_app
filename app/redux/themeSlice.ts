import {createSlice } from '@reduxjs/toolkit';
const initialState = {
    theme: "dark"
};
const themeSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});
export const {
   setTheme
} = themeSlice.actions;
export default themeSlice.reducer;
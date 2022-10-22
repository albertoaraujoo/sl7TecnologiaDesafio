import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: ''}

export const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        fillContent: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const {fillContent} = contentSlice.actions;
export default contentSlice.reducer;
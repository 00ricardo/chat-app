import { createSlice } from '@reduxjs/toolkit';
import { thunkSectionSelected, resetState } from '../services/sectionServices';

const initialState = {
    section: 'Chats'
}

export const sectionSlice = createSlice({
    name: 'section',
    initialState,
    reducers: {
        reset: (state) => resetState(state)
    },
    extraReducers: (builder) => {
        builder
            .addCase(thunkSectionSelected.pending, (state) => {
                state.section = 'Chats'
            })
            .addCase(thunkSectionSelected.fulfilled, (state, action) => {
                state.section = action.payload
            })
            .addCase(thunkSectionSelected.rejected, (state) => {
                state.section = 'Chats'
            })
    }
})

export const { reset } = sectionSlice.actions

export default sectionSlice.reducer
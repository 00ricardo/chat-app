import { createAsyncThunk } from '@reduxjs/toolkit';
import { SELECT_SECTION } from '../actions/triggers';
import { setSection } from '../actions/sectionActions';

export const resetState = createAsyncThunk(SELECT_SECTION, async (state, thunkAPI) => {
    state.section = 'Chats'
})

export const thunkSectionSelected = createAsyncThunk(SELECT_SECTION, async (state, thunkAPI) => {
    try {
        return await setSection(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})
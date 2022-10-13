import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_STORIE_LIST } from '../actions/triggers';
import { fetchStorieList } from '../actions/storieListActions';

export const resetState = createAsyncThunk(FETCH_STORIE_LIST, async (state, thunkAPI) => {
    state.storieList = []
})

export const thunkFetchStorieList = createAsyncThunk(FETCH_STORIE_LIST, async (thunkAPI) => {
    try {
        return await fetchStorieList()
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})
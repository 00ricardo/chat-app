import { createSlice } from '@reduxjs/toolkit';
import { thunkFetchStorieList, resetState } from '../services/storieListServices';

const initialState = {
    storieList: []
}

export const storieListSlice = createSlice({
    name: 'storieList',
    initialState,
    reducers: {
        reset: (state) => resetState(state)
    },
    extraReducers: (builder) => {
        builder
            .addCase(thunkFetchStorieList.pending, (state) => {
                state.storieList = []
            })
            .addCase(thunkFetchStorieList.fulfilled, (state, action) => {
                state.storieList = action.payload
            })
            .addCase(thunkFetchStorieList.rejected, (state, action) => {
                state.storieList = []
            })
    }
})

export const { reset } = storieListSlice.actions

export default storieListSlice.reducer
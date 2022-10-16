import { createSlice } from '@reduxjs/toolkit';
import {
    thunkFetchStorieList, resetState,
    thunkSetStoryVision, thunkSetUserStoryVision
} from '../services/storieListServices';

const initialState = {
    storieList: [],
}

export const storieListSlice = createSlice({
    name: 'storieList',
    initialState,
    reducers: {
        reset: (state) => resetState(state)
    },
    extraReducers: (builder) => {
        builder

            //Fetch Story List
            .addCase(thunkFetchStorieList.pending, (state) => {
                state.storieList = []
            })
            .addCase(thunkFetchStorieList.fulfilled, (state, action) => {
                state.storieList = action.payload
            })
            .addCase(thunkFetchStorieList.rejected, (state, action) => {
                state.storieList = []
            })

            //Set Story Vision
            .addCase(thunkSetStoryVision.pending, (state) => {
                //state.storieList = []
            })
            .addCase(thunkSetStoryVision.fulfilled, (state, action) => {
                let { userID, storyID } = action.payload
                let userStories = state.storieList[userID].stories
                userStories[storyID].viewed = true
            })
            .addCase(thunkSetStoryVision.rejected, (state, action) => {
                //state.storieList = []
            })


            //Set User Story Vision
            .addCase(thunkSetUserStoryVision.pending, (state) => {
                //state.storieList = []
            })
            .addCase(thunkSetUserStoryVision.fulfilled, (state, action) => {
                let { userID } = action.payload
                let userStr = state.storieList
                userStr[userID].viewed = true
            })
            .addCase(thunkSetUserStoryVision.rejected, (state, action) => {
                //state.storieList = []
            })


    }
})

export const { reset } = storieListSlice.actions

export default storieListSlice.reducer
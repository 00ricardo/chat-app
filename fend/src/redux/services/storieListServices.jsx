import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    FETCH_STORIE_LIST, SET_STORY_VISION, SET_USER_STORY_VISION
} from '../actions/triggers';

import { fetchStorieList, setStoryVision, setUserStoriesVision } from '../actions/storieListActions';

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

export const thunkSetStoryVision = createAsyncThunk(SET_STORY_VISION, async (state, thunkAPI) => {
    try {
        return await setStoryVision(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})

export const thunkSetUserStoryVision = createAsyncThunk(SET_USER_STORY_VISION, async (state, thunkAPI) => {
    try {
        return await setUserStoriesVision(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})

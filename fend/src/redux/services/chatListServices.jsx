import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_CHAT_LIST } from '../actions/triggers';
import { fetchChatList } from '../actions/chatListActions';

export const resetState = createAsyncThunk(FETCH_CHAT_LIST, async (state, thunkAPI) => {
    state.chatList = []
    state.chat = {}
})

export const thunkFetchChatList = createAsyncThunk(FETCH_CHAT_LIST, async (thunkAPI) => {
    try {
        return await fetchChatList()
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})
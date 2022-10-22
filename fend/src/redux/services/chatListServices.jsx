import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_CHAT_LIST, ADD_CHAT } from '../actions/triggers';
import { fetchChatList, addChatToList } from '../actions/chatListActions';

export const resetState = createAsyncThunk(FETCH_CHAT_LIST, async (state, thunkAPI) => {
    state.chatList = []
    state.chat = {}
})

export const thunkFetchChatList = createAsyncThunk(FETCH_CHAT_LIST, async (state, thunkAPI) => {
    try {
        return await fetchChatList()
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})

export const thunkAddChatToList = createAsyncThunk(ADD_CHAT, async (state, thunkAPI) => {
    try {
        return await addChatToList(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})
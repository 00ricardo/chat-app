import { createAsyncThunk } from '@reduxjs/toolkit';
import { FETCH_CONVERSATION, SEND_MESSAGE, GET_CHAT_ID } from '../actions/triggers';
import { fetchChatMessages, sendChatMessage, setChatID } from '../actions/chatActions';

export const resetState = createAsyncThunk(FETCH_CONVERSATION, async (state, thunkAPI) => {
    state.chatID = null
    state.messages = ''
    state.sendMessage = ''
})

export const thunkFetchConversation = createAsyncThunk(FETCH_CONVERSATION, async (state, thunkAPI) => {
    try {
        return await fetchChatMessages(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})

export const thunkSendMessage = createAsyncThunk(SEND_MESSAGE, async (state, thunkAPI) => {
    try {
        return await sendChatMessage(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})

export const thunkSetChatID = createAsyncThunk(GET_CHAT_ID, async (state, thunkAPI) => {
    try {
        return await setChatID(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})
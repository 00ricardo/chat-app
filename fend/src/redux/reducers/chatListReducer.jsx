import { createSlice } from '@reduxjs/toolkit';
import { thunkFetchChatList, resetState } from '../services/chatListServices';

const initialState = {
    chatList: [],
    chat: {}
}

export const chatListSlice = createSlice({
    name: 'chatList',
    initialState,
    reducers: {
        reset: (state) => resetState(state)
    },
    extraReducers: (builder) => {
        builder
            .addCase(thunkFetchChatList.pending, (state) => {
                state.chatList = []
                state.chat = {}
            })
            .addCase(thunkFetchChatList.fulfilled, (state, action) => {
                state.chatList = action.payload
                state.chat = {}
            })
            .addCase(thunkFetchChatList.rejected, (state, action) => {
                state.chatList = []
                state.chat = {}
            })
    }
})

export const { reset } = chatListSlice.actions

export default chatListSlice.reducer
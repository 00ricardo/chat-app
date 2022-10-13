import { createSlice } from '@reduxjs/toolkit';
import { thunkFetchConversation, thunkSendMessage, resetState, thunkGetChatID } from '../services/chatServices';

const initialState = {
    chatID: null,
    messages: [],
    sendMessage: ''
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        reset: (state) => resetState(state)
    },
    extraReducers: (builder) => {
        builder
            //Chat itself
            .addCase(thunkGetChatID.pending, (state) => {
                state.chatID = null
                state.messages = ''
                state.sendMessage = ''
            })
            .addCase(thunkGetChatID.fulfilled, (state, action) => {
                state.chatID = action.payload
            })
            .addCase(thunkGetChatID.rejected, (state) => {
                state.chatID = null
                state.messages = ''
                state.sendMessage = ''
            })


            //Conversation
            .addCase(thunkFetchConversation.pending, (state) => {
                state.chatID = null
                state.messages = ''
            })
            .addCase(thunkFetchConversation.fulfilled, (state, action) => {
                state.messages = action.payload
            })
            .addCase(thunkFetchConversation.rejected, (state) => {
                state.chatID = null
                state.messages = ''
            })

            //Messages
            .addCase(thunkSendMessage.pending, (state) => {
                state.chatID = null
                state.messages = ''
                state.sendMessage = ''
            })
            .addCase(thunkSendMessage.fulfilled, (state, action) => {
                state.chatID = action.payload.chatID
                state.sendMessage = action.payload.sendMessage
            })
            .addCase(thunkSendMessage.rejected, (state) => {
                state.chatID = null
                state.messages = ''
                state.sendMessage = ''
            })
    }
})

export const { reset } = chatSlice.actions

export default chatSlice.reducer
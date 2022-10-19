import { createSlice } from '@reduxjs/toolkit';
import { thunkFetchConversation, thunkSendMessage, resetState, thunkSetChatID } from '../services/chatServices';

const initialState = {
    chatID: null,
    messages: [],
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
            .addCase(thunkSetChatID.pending, (state) => {
                state.chatID = null
            })
            .addCase(thunkSetChatID.fulfilled, (state, action) => {
                state.chatID = action.payload
            })
            .addCase(thunkSetChatID.rejected, (state) => {
                state.chatID = null
            })


            //Conversation
            .addCase(thunkFetchConversation.pending, (state) => {
                state.messages = []
            })
            .addCase(thunkFetchConversation.fulfilled, (state, action) => {
                state.messages = action.payload
            })
            .addCase(thunkFetchConversation.rejected, (state) => {
                state.messages = []
            })

            //Messages
            .addCase(thunkSendMessage.pending, (state) => {
                //state.messages = []
            })
            .addCase(thunkSendMessage.fulfilled, (state, action) => {
                state.messages = action.payload.messages
            })
            .addCase(thunkSendMessage.rejected, (state) => {
                state.messages = []
            })
    }
})

export const { reset } = chatSlice.actions

export default chatSlice.reducer
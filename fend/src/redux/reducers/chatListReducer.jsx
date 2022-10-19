import { createSlice } from '@reduxjs/toolkit';
import { thunkFetchChatList, resetState, thunkAddChatToList } from '../services/chatListServices';

const initialState = {
    chatList: []
}

export const chatListSlice = createSlice({
    name: 'chatList',
    initialState,
    reducers: {
        reset: (state) => resetState(state)
    },
    extraReducers: (builder) => {
        builder

            //Fetch Chat List
            .addCase(thunkFetchChatList.pending, (state) => {
                state.chatList = []

            })
            .addCase(thunkFetchChatList.fulfilled, (state, action) => {
                state.chatList = action.payload
            })
            .addCase(thunkFetchChatList.rejected, (state, action) => {
                state.chatList = []
            })

            //Add Chat to List
            .addCase(thunkAddChatToList.pending, (state) => {
                state.chatList = []

            })
            .addCase(thunkAddChatToList.fulfilled, (state, action) => {
                state.chatList = action.payload
            })
            .addCase(thunkAddChatToList.rejected, (state, action) => {
                state.chatList = []
            })

    }
})

export const { reset } = chatListSlice.actions

export default chatListSlice.reducer
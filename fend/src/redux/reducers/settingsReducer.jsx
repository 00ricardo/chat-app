import { createSlice } from '@reduxjs/toolkit';
import { thunkSetNotificationSettings, resetState, thunkSetStatusSettings } from '../services/settingsService';

const initialState = {
    notifications: true,
    status: true
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        reset: (state) => resetState(state)
    },
    extraReducers: (builder) => {
        builder

            //Notification Settings
            .addCase(thunkSetNotificationSettings.pending, (state) => {
                state.notifications = true
            })
            .addCase(thunkSetNotificationSettings.fulfilled, (state, action) => {
                state.notifications = action.payload
            })
            .addCase(thunkSetNotificationSettings.rejected, (state, action) => {
                state.notifications = true
            })

            //Status Settings
            .addCase(thunkSetStatusSettings.pending, (state) => {
                state.status = true
            })
            .addCase(thunkSetStatusSettings.fulfilled, (state, action) => {
                state.status = action.payload
            })
            .addCase(thunkSetStatusSettings.rejected, (state, action) => {
                state.status = true
            })

    }
})

export const { reset } = settingsSlice.actions

export default settingsSlice.reducer
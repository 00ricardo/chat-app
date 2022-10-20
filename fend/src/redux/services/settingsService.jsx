import { createAsyncThunk } from '@reduxjs/toolkit';
import { SET_NOTIFICATIONS_SETTINGS, SET_STATUS_SETTINGS } from '../actions/triggers';
import { setNotificationsSettings, setStatusSettings } from '../actions/settingsActions';

export const resetState = createAsyncThunk(SET_NOTIFICATIONS_SETTINGS, async (state, thunkAPI) => {
    state.notifications = true
    state.status = true
})

export const thunkSetNotificationSettings = createAsyncThunk(SET_NOTIFICATIONS_SETTINGS, async (state, thunkAPI) => {
    try {
        return await setNotificationsSettings(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})

export const thunkSetStatusSettings = createAsyncThunk(SET_STATUS_SETTINGS, async (state, thunkAPI) => {
    try {
        return await setStatusSettings(state)
    } catch (error) {
        const message = 'error'
        return thunkAPI.rejectWithValue(message)
    }
})
import { combineReducers } from 'redux';
import chatListReducer from './chatListReducer';
import storieListReducer from './storieListReducer'
import sectionReducer from './sectionReducer'
import chatReducer from './chatReducer'

// get all reducers together (state : value)
export default combineReducers({
    conversations: chatListReducer,
    stories: storieListReducer,
    sidebar: sectionReducer,
    chat: chatReducer
})
import { combineReducers } from 'redux';
import chatListReducer from './chatListReducer';
import storieListReducer from './storieListReducer'
import sectionReducer from './sectionReducer'
import chatReducer from './chatReducer'

// get all reducers together (state : value)
export default combineReducers({
    chatList: chatListReducer,
    storieList: storieListReducer,
    section: sectionReducer,
    chat: chatReducer
})
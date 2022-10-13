import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { useDispatch } from 'react-redux';
import { thunkGetChatID, thunkFetchConversation } from '../redux/services/chatServices'

export default function Conversation(props) {
    const dispatch = useDispatch()

    const openChat = (chatID) => {
        dispatch(thunkGetChatID(chatID))
        dispatch(thunkFetchConversation(chatID))
    }

    return (
        <ListItem key={props.id} className='conversation' style={{ width: '90%', padding: 0 }} onClick={() => openChat(props.id)}>
            <ListItemAvatar className='list-item-avatar'>
                <Avatar alt={props.chat.person} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText className='list-item-text' primary={props.chat.person} secondary={props.chat.last_message} />
            <ListItemText className='chat-user message-time' secondary={props.chat.time} />
        </ListItem >
    )
}

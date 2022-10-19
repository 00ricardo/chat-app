import React, { useEffect } from 'react'
import List from '@mui/material/List';
import Conversation from './Conversation';
import Typography from '@mui/material/Typography';

import { useSelector, useDispatch } from 'react-redux';
import { thunkFetchChatList } from '../redux/services/chatListServices'



export default function ChatList(props) {
    const { chatList } = useSelector((state) => state.conversations)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(thunkFetchChatList())
    }, [dispatch])

    return (
        <>
            {chatList.filter(cvst => (cvst.person.toLowerCase()).includes(props.filter.toLowerCase())).length !== 0 ?
                <List className='conversation-list' style={{ width: '100%', marginTop: '20px' }}>
                    {chatList.filter(cvst => (cvst.person.toLowerCase()).includes(props.filter.toLowerCase()))
                        .map((chat, idx) => (
                            <Conversation chat={chat} id={chat.chatID} key={idx} className='conversation' />
                        ))}
                </List>
                : <Typography variant="h4" style={{ height: '-webkit-fill-available', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                    Chat not found
                </Typography>
            }
        </>
    )
}



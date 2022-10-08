import React from 'react'
import List from '@mui/material/List';
import Conversation from './Conversation';
export default function ChatList() {

    const conversations = [
        {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Ricardo',
            last_message: 'Olá, tudo bem?',
            time: '11pm'
        }, {
            person: 'Last one',
            last_message: 'LASTT',
            time: '11pm'
        },
    ]
    return (
        <>
            <List className='conversation-list' style={{ width: '100%' }}>
                {conversations.map((chat, idx) => (
                    <Conversation chat={chat} id={idx} key={idx} className='conversation' />
                ))}
            </List>
        </>
    )
}

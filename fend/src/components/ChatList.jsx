import React from 'react'
import List from '@mui/material/List';
import Conversation from './Conversation';
import Typography from '@mui/material/Typography';
export default function ChatList(props) {

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
            {conversations.filter(cvst => (cvst.person.toLowerCase()).includes(props.filter.toLowerCase())).length !== 0 ?
                <List className='conversation-list' style={{ width: '100%', marginTop: '20px' }}>
                    {conversations.filter(cvst => (cvst.person.toLowerCase()).includes(props.filter.toLowerCase()))
                        .map((chat, idx) => (
                            <Conversation chat={chat} id={idx} key={idx} className='conversation' />
                        ))}
                </List>
                : <Typography variant="h4" style={{ height: '-webkit-fill-available', display: 'flex', alignItems: 'center', justifyContent: 'center' }}  >
                    Chat not found
                </Typography>
            }
        </>
    )
}

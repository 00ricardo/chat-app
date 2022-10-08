import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ChatSection() {
    return (
        <div className='chat-section-container'>
            <div className='navbar-chat'>
                <Avatar alt='Ricardo Silva' src="/static/images/avatar/1.jpg" className='chat-avatar' />
                <div className='chat-status'>
                    <div className='chat-user'>Ricardo Silva</div>
                    <small className='online'>Online</small>
                </div>
            </div>
            <div>
                <Icon icon="cil:bell" color="#11a5ed" width="50" />
                <Icon icon="charm:phone" color="#7cd420" width="50" />
                <Icon icon="bi:camera-video" color="#fecb00" width="50" />
            </div>

        </div >
    )
}

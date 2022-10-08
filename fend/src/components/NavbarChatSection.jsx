import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
export default function NavbarChatSection() {

    const menuItems = {
        bell: <Icon icon="cil:bell" color="#11a5ed" width="30" />,
        phone: <Icon icon="charm:phone" color="#7cd420" width="30" />,
        camera: <Icon icon="bi:camera-video" color="#fecb00" width="30" />
    }
    return (
        <div className='navbar-chat-container'>
            <div className='navbar-chat'>
                <Avatar alt='Ricardo Silva' src="/static/images/avatar/1.jpg" className='chat-avatar' />
                <div className='chat-status'>
                    <div className='chat-user'>Ricardo Silva</div>
                    <small className='online'>Online</small>
                </div>
            </div>
            <div className='menu-chat'>
                {Object.keys(menuItems).map((key, idx) => (
                    <div key={idx} className='menu-chat-item'>
                        {menuItems[key]}
                    </div>
                ))}
            </div>
        </div>
    )
}

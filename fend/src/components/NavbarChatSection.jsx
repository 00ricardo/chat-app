import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
export default function NavbarChatSection() {

    const menuItems = {
        bell: {
            icon: <Icon icon="cil:bell" width="30" />,
            background: '#11a5ed'
        },
        phone: {
            icon: <Icon icon="charm:phone" width="30" />,
            background: '#7cd420'
        },
        camera: {
            icon: <Icon icon="bi:camera-video" width="30" />,
            background: '#fecb00'
        }
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
                        <Avatar key={idx} style={{ background: menuItems[key].background }}>
                            {menuItems[key].icon}
                        </Avatar>
                    </div>
                ))}
            </div>
        </div>
    )
}

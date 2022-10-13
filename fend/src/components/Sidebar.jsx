import React from 'react'
import List from '@mui/material/List';
import { Icon } from '@iconify/react';
import logo from '../public/logo.png'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Sidebar() {

    const [sectionSelected, setSectionSelected] = useState('Chats')
    const firstList = {
        NewChat: <Icon icon="carbon:add-filled" width="45" className='custom-red-default-icon pulse' />,
        Chats: <Icon icon="bi:chat" width="25" className={`${sectionSelected === 'Chats' ? 'custom-red-icon' : 'custom-grey-icon'} chat-icon`} />,
        Profile: <Icon icon="carbon:user" width="25" className={`${sectionSelected === 'Profile' ? 'custom-red-icon' : 'custom-grey-icon'} profile-icon`} />,
        Favs: <Icon icon="clarity:favorite-line" width="25" className={`${sectionSelected === 'Favs' ? 'custom-red-icon' : 'custom-grey-icon'} fav-icon`} />,
        Store: <Icon icon="clarity:store-line" width="25" className={`${sectionSelected === 'Store' ? 'custom-red-icon' : 'custom-grey-icon'} store-icon`} />,
    }

    const btnStyle = {
        width: '100%',
        height: '100%',
        padding: 0,
        borderRadius: '12px',
        position: 'relative',
        left: '-10px'
    }

    return (
        <div className='sidebar-container'>
            <div className='first-list' style={{ padding: 0 }}>
                <div style={{ padding: 0 }}>
                    <img className='brandapp' src={logo} height='30px' alt='Chat App Logo' />
                </div>
                {Object.keys(firstList).map((icon, idx) => (
                    <div key={idx} className='iconsec'>
                        <Button variant="text"
                            onClick={() => setSectionSelected(icon)}
                            style={btnStyle}
                            className={sectionSelected === icon && icon !== 'NewChat' ? 'active' : ''}>
                            {firstList[icon]}
                        </Button>
                    </div>
                ))}
            </div>
            <List className='second-list' style={{ padding: 0 }}>
                <div className='iconsec'>
                    <Avatar alt='Ricardo Silva' src="/static/images/avatar/1.jpg" className='chat-avatar' />
                </div>
            </List>
        </div>

    )
}

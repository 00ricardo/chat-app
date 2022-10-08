import React from 'react'
import List from '@mui/material/List';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import { Icon } from '@iconify/react';
import logo from '../public/logo.png'

export default function Sidebar() {
    const firstList = {
        NewChat: <Icon icon="carbon:add-filled" width="45" className='custom-red-icon' />,
        Chats: <Icon icon="bi:chat" width="25" className='custom-grey-icon chat-icon' />,
        Profile: <Icon icon="carbon:user" width="25" className='custom-grey-icon profile-icon' />,
        Favs: <Icon icon="clarity:favorite-line" width="25" className='custom-grey-icon fav-icon' />,
        Store: <Icon icon="clarity:store-line" width="25" className='custom-grey-icon store-icon' />,
    }

    return (
        <div className='sidebar-container'>
            <div className='first-list' style={{ padding: 0 }}>
                <div style={{ padding: 0 }}>
                    <img src={logo} height='30px' alt='Chat App Logo' />
                </div>
                {Object.keys(firstList).map((icon, idx) => (
                    <div key={idx} className='iconsec'>
                        {firstList[icon]}
                    </div>
                ))}
            </div>
            <List className='second-list' style={{ padding: 0 }}>
                <div className='iconsec'>
                    <ImageIcon />
                </div>
                <div>
                    <WorkIcon />
                </div>
            </List>
        </div>

    )
}

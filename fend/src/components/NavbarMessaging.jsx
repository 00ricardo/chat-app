import React from 'react'
import { Icon } from '@iconify/react';
import Input from '@mui/material/Input';
export default function NavbarMessaging() {
    return (
        <div className='navbar-messaging'>
            <div className='send-options'>
                <Icon color='#fecb00' icon="iconoir:emoji" width="40" style={{ width: '50px' }} />
                <Icon color='#11a5ed' icon="ant-design:plus-circle-outlined" width="40" style={{ width: '50px' }} />
            </div>
            <div className='send-message'>
                <Input placeholder="Write a message" style={{ width: '-webkit-fill-available' }} />
            </div>
            <div className='send-icon'>
                <Icon color='#ff5252' icon="fluent:send-24-regular" width="50" />
            </div>
        </div>
    )
}

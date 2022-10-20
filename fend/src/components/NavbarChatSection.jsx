import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Icon } from '@iconify/react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { useDispatch } from 'react-redux';
import { thunkSetChatID } from '../redux/services/chatServices'

export default function NavbarChatSection() {
    const dispatch = useDispatch()
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            backgroundColor: '#44b700',
            color: '#44b700',
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            '&::after': {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                animation: 'ripple 1.2s infinite ease-in-out',
                border: '1px solid currentColor',
                content: '""',
            },
        },
        '@keyframes ripple': {
            '0%': {
                transform: 'scale(.8)',
                opacity: 1,
            },
            '100%': {
                transform: 'scale(2.4)',
                opacity: 0,
            },
        },
    }));

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
        },
        close: {
            icon: <Icon icon="ep:close-bold" width="30" />,
            backgorund: '#fecb00',
        }
    }

    const handleChatMenu = (opt) => {
        switch (opt) {
            case 'bell':

                break;
            case 'phone':

                break;
            case 'camera':

                break;
            case 'close':
                dispatch(thunkSetChatID(null))
                break;
            default:
                break;
        }
    }

    return (
        <div className='navbar-chat-container animate__animated animate__fadeInDown animate__delay-0.5s'>
            <div className='navbar-chat'>
                <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
                    <Avatar alt='Ricardo Silva' src='/static/images/avatar/1.jpg' className='chat-avatar' />
                </StyledBadge>
                <div className='chat-status'>
                    <div className='chat-user'>Ricardo Silva</div>
                    <small className='online'>Online</small>
                </div>
            </div>
            <div className='menu-chat'>
                {Object.keys(menuItems).map((key, idx) => (
                    <div key={idx} className='menu-chat-item'>
                        <Avatar key={idx} style={{ background: menuItems[key].background, cursor: 'pointer' }} onClick={() => { handleChatMenu(key) }}>
                            {menuItems[key].icon}
                        </Avatar>
                    </div>
                ))}
            </div>
        </div>
    )
}

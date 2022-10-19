import React, { useEffect } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ChatIcon from '@mui/icons-material/Chat';
import $ from 'jquery'
import iziModal from 'izimodal/js/iziModal';
import PickUserToChat from './PickUserToChat';
export default function NewChatSettings(props) {

    const style = {
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
        },
    }

    const handleNewChat = () => {
        $.fn.iziModal = iziModal;
        const modal = $('#modal-new-chat')
        modal.iziModal('open')
    }

    useEffect(() => {
        const modal = $('#modal-new-chat')
        modal.iziModal({
            title: 'New Chat',
            background: '#404144',
            headerColor: 'transparent',
        });
    })

    return (
        <>
            <Menu
                anchorEl={props.anchorEl}
                id="account-menu"
                open={props.open}
                onClose={props.handleClose}
                onClick={props.handleClose}
                PaperProps={style}
                transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
                <MenuItem onClick={() => handleNewChat()}>
                    <ListItemIcon>
                        <ChatIcon fontSize="small" style={{ color: '#ff5252' }} />
                    </ListItemIcon>
                    New Chat
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <GroupAddIcon fontSize="small" style={{ color: '#ff5252' }} />
                    </ListItemIcon>
                    Invite Friends
                </MenuItem>
            </Menu>
            <div id='modal-new-chat' className="iziModal" style={{ maxHeight: '500px', minWidth: '400px' }}>
                <PickUserToChat />
            </div>
        </>
    )
}

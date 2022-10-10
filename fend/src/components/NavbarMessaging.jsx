import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Input from '@mui/material/Input';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiPicker from 'emoji-picker-react';

const options = {
    'Upload a File': <UploadFileIcon />,
    Photo: <InsertPhotoIcon />,
}

export default function NavbarMessaging() {
    const [userOptions, setUserOptions] = useState(null);
    const [emojisAvailable, setEmojisAvailable] = useState(null);

    const handleOpenUserMenu = (event) => {
        setUserOptions(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setUserOptions(null);
    };

    const handleOpenEmojis = (event) => {
        setEmojisAvailable(event.currentTarget);
    };

    const handleCloseEmojis = () => {
        setEmojisAvailable(null);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='shadow-divider' />
            <div className='navbar-messaging'>
                <div>
                    <Menu className='emoji-menu' anchorEl={emojisAvailable} open={Boolean(emojisAvailable)} onClose={handleCloseEmojis}>
                        <MenuItem onClick={handleCloseEmojis}>
                            <EmojiPicker theme='dark' />
                        </MenuItem>
                    </Menu>
                </div>

                <div className='send-options'>
                    <Button style={{ padding: 0 }}>
                        <Avatar style={{ background: '#fecb00', marginRight: '10px' }}>
                            <Icon onClick={handleOpenEmojis} icon="iconoir:emoji" width="30" style={{ width: '50px' }} />
                        </Avatar>
                    </Button>
                    <Button style={{ padding: 0 }}>
                        <Avatar style={{ background: '#11a5ed' }}>
                            <Icon onClick={handleOpenUserMenu} icon="ant-design:plus-circle-outlined" width="30" style={{ width: '50px' }} />
                        </Avatar>
                    </Button>
                    <div>
                        <Menu anchorEl={userOptions} open={Boolean(userOptions)} onClose={handleCloseUserMenu}>
                            {Object.keys(options).map((key) => (
                                <MenuItem key={key} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"> {options[key]} {key}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                </div>
                <div className='send-message'>
                    <Input placeholder="Write a message" style={{ width: '-webkit-fill-available' }} />
                </div>
                <div className='send-icon'>
                    <Button>
                        <Icon color='#ff5252' icon="fluent:send-24-regular" width="50" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

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

export default function NavbarMessaging(props) {

    const [userOptions, setUserOptions] = useState(null);
    const [emojisAvailable, setEmojisAvailable] = useState(null);
    const [msg, setMsg] = useState('');
    const [_src, setSrc] = useState('');
    const [alt, setAlt] = useState('');

    const handleOpenUserMenu = (e) => {
        setUserOptions(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setUserOptions(null);
    };

    const handleOpenEmojis = (e) => {
        setEmojisAvailable(e.currentTarget);
    };

    const handleCloseEmojis = () => {
        setEmojisAvailable(null);
    };

    const handleEmojiClick = (emoji) => {
        setMsg((currMsg) => currMsg + emoji.emoji)
    }

    const handleMessage = (e) => {
        setMsg(e.target.value);
    }

    const sendMessage = () => {
        const msgs = document.getElementById('messages')

        if (msg !== '' && _src !== '') {
            props.setMsgs([...props.msgs, {
                user: 'Ricardo Silva',
                messages: [{
                    img: _src,
                    timestamp: '17:44'
                },
                {
                    msg: msg,
                    timestamp: '17:44'
                }]
            }])

            //delete temp img
            document.getElementById('tempimg').remove()
        }

        else if (_src !== '') {
            sendImage()
        }

        else if (msg !== '') {
            sendText()
        }
        else {
            //pass
        }

        setTimeout(() => {
            msgs.scrollTop = msgs.scrollHeight;
            setSrc('')
            setAlt('')
            setMsg('')
        }, 100)
    }

    const sendImage = () => {
        props.setMsgs([...props.msgs, {
            user: 'Ricardo Silva',
            messages: [{
                img: _src,
                alt: alt,
                timestamp: '17:44'
            }]
        }])

        //delete temp img
        document.getElementById('tempimg').remove()
    }

    const sendText = () => {
        props.setMsgs([...props.msgs, {
            user: 'Ricardo Silva',
            messages: [{
                msg: msg,
                timestamp: '17:44'
            }]
        }])
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }

    const handleFileSelect = function (file) {
        var input = file.target;
        var reader = new FileReader();
        reader.readAsDataURL(input.files[0]);

        reader.onload = function () {
            var dataURL = reader.result;
            handleCloseUserMenu()

            //Show img to send in input
            const showimg = document.getElementById('showimg-tosend')
            const temp = document.createElement('img')

            temp.src = dataURL
            temp.style.width = '50px'
            temp.id = 'tempimg'

            showimg.appendChild(temp)

            if (_src === '') {
                setSrc(dataURL)
                setAlt(input.files[0].name)
            }
        };

    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='shadow-divider' />
            <div className='navbar-messaging'>
                <div>
                    <Menu className='emoji-menu' anchorEl={emojisAvailable} open={Boolean(emojisAvailable)} onClose={handleCloseEmojis}>
                        <MenuItem>
                            <EmojiPicker
                                theme='dark'
                                onEmojiClick={handleEmojiClick}
                                height={450}
                                width={300}
                                style={{ backgroundColor: 'transparent' }}
                            />
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
                                <MenuItem key={key} >
                                    <Button component="label">
                                        <Typography textAlign="center"> {options[key]} {key}</Typography>
                                        <input hidden accept="image/*" type="file" id='selectedFile' onChange={handleFileSelect} />
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>
                <div className='send-message'>
                    <div id='showimg-tosend' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content' }} />
                    <Input
                        inputRef={(focus) => focus?.focus()}
                        value={msg}
                        onChange={handleMessage}
                        onKeyPress={handleEnter}
                        placeholder="Write a message"
                        style={{ width: '-webkit-fill-available' }}
                        autoFocus />
                </div>
                <div className='send-icon'>
                    <Button onClick={sendMessage}>
                        <Icon color='#ff5252' icon="fluent:send-24-regular" width="50" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

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
    const [msg, setMsg] = React.useState('');
    const [src, setSrc] = React.useState('');

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
        const msgContainer = document.createElement('div')
        const newMessage = document.createElement('p')
        msgContainer.className = 'msg-to'
        newMessage.className = 'text-msg me'

        if (msg !== '' && src !== '') {
            sendImage(msgContainer, newMessage, msgs)

            //Send Text too, but with a second element
            const msgContainer2 = document.createElement('div')
            const newMessage2 = document.createElement('p')

            msgContainer2.className = 'msg-to'
            newMessage2.className = 'text-msg me'

            newMessage2.innerHTML = msg
            msgContainer2.appendChild(newMessage2)
            msgs.appendChild(msgContainer2)
        }

        else if (src !== '') {
            sendImage(msgContainer, newMessage, msgs)
        }

        else
            sendText(newMessage, msgContainer, msgs)

        setTimeout(() => {
            msgs.scrollTop = msgs.scrollHeight;
            setSrc('')
            setMsg('')
        }, 100)
    }

    const sendImage = (msgContainer, newMessage, msgs) => {
        const newImage = document.createElement('img')
        newImage.src = src
        newImage.style.width = '260px'
        newMessage.appendChild(newImage)
        msgContainer.appendChild(newMessage)
        msgs.appendChild(msgContainer)

        //delete temp img
        document.getElementById('tempimg').remove()
    }

    const sendText = (newMessage, msgContainer, msgs) => {
        newMessage.innerHTML = msg
        msgContainer.appendChild(newMessage)
        msgs.appendChild(msgContainer)
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            sendMessage()
        }
    }

    const handleFileSelect = function (file) {
        var input = file.target;
        var reader = new FileReader();
        reader.onload = function () {
            var dataURL = reader.result;
            handleCloseUserMenu()
            //sendMessage(this, dataURL)

            //Show img to send in input
            const showimg = document.getElementById('showimg-tosend')
            const temp = document.createElement('img')
            temp.src = dataURL
            temp.style.width = '50px'
            temp.id = 'tempimg'

            showimg.appendChild(temp)
            setSrc(dataURL)

        };
        reader.readAsDataURL(input.files[0]);

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
                    <Input value={msg} onChange={handleMessage} onKeyPress={handleEnter} placeholder="Write a message" style={{ width: '-webkit-fill-available' }} />
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

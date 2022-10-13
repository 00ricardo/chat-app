import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Input from '@mui/material/Input';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiPicker from 'emoji-picker-react';
import Dropdown from 'react-bootstrap/Dropdown';

const options = {
    'Upload a File': <UploadFileIcon />,
    Photo: <InsertPhotoIcon />,
}

export default function NavbarMessaging(props) {

    const [msg, setMsg] = useState('');
    const [_src, setSrc] = useState('');
    const [alt, setAlt] = useState('');

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

    const HandleSecondDropwdown = (key) => {
        let hiddenInput = document.getElementById(`selectedFile-${key}`)
        hiddenInput.click()
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='shadow-divider' />
            <div className='navbar-messaging'>
                <div className='send-options'>
                    <Dropdown className="d-inline mx-2" autoClose="outside" drop='up' variant="secondary">
                        <Dropdown.Toggle id="dropdown-autoclose-outside" variant="secondary">
                            <Avatar style={{ background: '#fecb00' }}>
                                <Icon icon="iconoir:emoji" width="30" style={{ width: '50px' }} />
                            </Avatar>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >
                                <EmojiPicker
                                    theme='dark'
                                    onEmojiClick={handleEmojiClick}
                                    height={450}
                                    width={300}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="d-inline mx-2" autoClose="outside" drop='up' variant="secondary">
                        <Dropdown.Toggle id="dropdown-autoclose-outside" variant="secondary">
                            <Avatar style={{ background: '#11a5ed' }}>
                                <Icon icon="ant-design:plus-circle-outlined" width="30" style={{ width: '50px' }} />
                            </Avatar>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {Object.keys(options).map((key) => (
                                <div key={key}>
                                    <Dropdown.Item style={{ background: '#202124' }} key={key}>
                                        <Button component="label" style={{ color: '#ffffffbf', fontSize: '10px' }} onClick={() => HandleSecondDropwdown(key)}>
                                            <Typography textAlign="center" style={{ fontSize: '13px' }}>{options[key]} {key}</Typography>
                                        </Button>
                                    </Dropdown.Item>
                                    <input hidden accept="image/*" type="file" id={`selectedFile-${key}`} onChange={handleFileSelect} key={key} />
                                </div>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className='send-message'>
                    <div id='showimg-tosend' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content' }} />
                    <Input
                        className='writemsg'
                        inputRef={(focus) => focus?.focus()}
                        value={msg}
                        onChange={handleMessage}
                        onKeyPress={handleEnter}
                        placeholder="Write a message"
                        style={{ width: '-webkit-fill-available', colo: 'green !important' }}
                        autoFocus />
                </div>
                <div className='send-icon'>
                    <Button onClick={sendMessage}>
                        <Icon color='#ff5252' icon="fluent:send-24-regular" width="50" />
                    </Button>
                </div>
            </div>
        </div >
    )
}

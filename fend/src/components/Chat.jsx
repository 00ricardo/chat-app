import React, { useEffect, useState } from 'react'
import NavbarMessaging from './NavbarMessaging'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import { useSelector } from 'react-redux';

export default function Chat() {

    const { messages } = useSelector((state) => state.chat)
    const msgs = messages ? messages : []

    const [openModal, setOpenModal] = useState(false);
    const [imgOpenSrc, setImgOpenSrc] = useState('');
    const [imgOpenAlt, setImgOpenAlt] = useState('');

    const handleOpen = (src, alt) => {
        setImgOpenSrc(src)
        setImgOpenAlt(alt)
        setOpenModal(true);
    }
    const handleClose = () => {
        setOpenModal(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        p: 4,
    };


    useEffect(() => {
        setTimeout(() => {
            const lastMessage = document.getElementById('messages')
            lastMessage.scrollTop = lastMessage.scrollHeight;
        }, 100)
    }, [messages])

    return (
        <div className='chat'>
            <div id='messages' className='messages'>
                {msgs.map((message, i) => (
                    <div key={i}>
                        {message.user !== 'Ricardo Silva' ?
                            <div className='msg-from'>
                                <p className={`text-msg ${(i + 1) === msgs.length ? 'animate__animated animate__fadeInRight' : ''}`}>
                                    {message.img && message.alt ?
                                        <img className='send-photo' src={message.img} alt={message.alt} onClick={() => handleOpen(message.img, message.alt)} /> :
                                        <>{message.msg}</>
                                    }
                                </p>
                            </div>
                            :
                            <div className='msg-to'>
                                <p className={`text-msg me ${(i + 1) === msgs.length ? 'animate__animated animate__fadeInLeft' : ''}`}>
                                    {message.img ?
                                        <img className='send-photo' src={message.img} alt={message.alt} onClick={() => handleOpen(message.img, message.alt)} /> :
                                        <>{message.msg}</>
                                    }
                                </p>
                            </div>
                        }
                    </div>
                ))}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}>
                <Fade in={openModal}>
                    <Box sx={style} id='modal-box'>
                        <img src={imgOpenSrc} alt={imgOpenAlt} style={{ width: '-webkit-fill-available' }}></img>
                    </Box>
                </Fade>
            </Modal>
            <NavbarMessaging />
        </div >
    )
}

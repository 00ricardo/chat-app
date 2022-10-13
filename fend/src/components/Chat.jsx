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
    }, [])

    return (
        <div className='chat'>
            <div id='messages' className='messages'>
                {msgs.map((message, i) => (
                    <div key={i}>
                        {message.user !== 'Ricardo Silva' ?
                            <>
                                {message.messages.map((msg, idx) => (
                                    <div className='msg-from' key={idx} >
                                        <p className='text-msg'>
                                            {msg.img && msg.alt ?
                                                <img className='send-photo' src={msg.img} alt={msg.alt} onClick={() => handleOpen(msg.img, msg.alt)} /> :
                                                <>{msg.msg}</>
                                            }
                                        </p>
                                    </div>
                                ))}
                            </> :
                            <>
                                {message.messages.map((msg, idx) => (
                                    <div className='msg-to' key={idx}>
                                        <p className='text-msg me'>
                                            {msg.img ?
                                                <img className='send-photo' src={msg.img} alt={msg.alt} onClick={() => handleOpen(msg.img, msg.alt)} /> :
                                                <>{msg.msg}</>
                                            }
                                        </p>
                                    </div>
                                ))}
                            </>
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

import React, { useEffect, useState } from 'react'
import NavbarMessaging from './NavbarMessaging'
import birdPhoto from '../public/photo.jpg'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export default function Chat() {
    const messages = [
        {
            user: 'Andreia Farinha',
            messages: [
                {
                    msg: 'Olá Ricardo, tudo bem?',
                    timestamp: '17:39'
                }],
        },
        {
            user: 'Ricardo Silva',
            messages: [
                {
                    msg: 'Olá Andreia, está tudo bem e contigo?',
                    timestamp: '17:41'
                },
                {
                    msg: 'Esperei pela tua mensagem o dia inteiro :)',
                    timestamp: '17:41'
                },
            ],
        },
        {
            user: 'Andreia Farinha',
            messages: [
                {
                    msg: 'Só consegui um tempinho agora... Mas já aqui estou :)',
                    timestamp: '17:43'
                }, {
                    msg: 'Como foi o teu dia?',
                    timestamp: '17:43'
                },
                {
                    img: { birdPhoto },
                    alt: 'bird.png',
                    timestamp: '17:44'
                }
            ],
        },
        {
            user: 'Ricardo Silva',
            messages: [
                {
                    msg: 'Normal e o teu?',
                    timestamp: '17:44'
                },
                {
                    img: { birdPhoto },
                    alt: 'bird.png',
                    timestamp: '17:44'
                }
            ],
        }
    ]

    const [msgs, setMsgs] = useState(messages)
    const [openModal, setOpenModal] = useState(false);
    const [imgOpenSrc, setImgOpenSrc] = useState('');
    const [imgOpenAlt, setImgOpenAlt] = useState('');

    const handleOpen = (src, alt) => {
        setImgOpenSrc(src)
        setImgOpenAlt(alt)
        setOpenModal(true);
        /*  document.body.style.filter = 'blur(8px)'
          let modal = document.getElementById('modal-box')
          modal.style.filter = 'blur(0px)'
          modal.style.zIndex = 1000*/
    }
    const handleClose = () => {
        setOpenModal(false);
        // document.body.style.filter = 'blur(0px)'
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
                                                <img className='send-photo' src={msg.img} alt={msg.alt} onClick={handleOpen} /> :
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
            <NavbarMessaging msgs={msgs} setMsgs={setMsgs} />
        </div >
    )
}

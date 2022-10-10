import React, { useEffect } from 'react'
import NavbarMessaging from './NavbarMessaging'
import $ from 'jquery';
import birdPhoto from '../public/photo.jpg'

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
                    timestamp: '17:44'
                }
            ],
        },
    ]

    useEffect(() => {
        $(function () {
            setTimeout(() => {
                const lastMessage = document.getElementById('messages')
                lastMessage.scrollTop = lastMessage.scrollHeight;
            }, 100)

        });
    }, [])

    return (
        <div className='chat'>
            <div id='messages' className='messages'>
                {messages.map((message, i) => (
                    <div key={i}>
                        {message.user !== 'Ricardo Silva' ?
                            <>
                                {message.messages.map((msg, idx) => (
                                    <div className='msg-from' key={idx} >
                                        <p className='text-msg'>
                                            {msg.img ?
                                                <img className='send-photo' src={birdPhoto} alt='birdPhoto' /> :
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
                                                <img className='send-photo' src={birdPhoto} alt='birdPhoto' /> :
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
            <NavbarMessaging />
        </div >
    )
}

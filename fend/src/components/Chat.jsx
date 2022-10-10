import React, { useEffect } from 'react'
import NavbarMessaging from './NavbarMessaging'
import $ from 'jquery';
import birdPhoto from '../public/photo.jpg'

export default function Chat() {
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
                <div className='msg-from '>
                    <p className='text-msg'>
                        Olá Ricardo, tudo bem?
                    </p>
                </div>
                <div className='msg-to'>
                    <p className='text-msg me'>
                        Olá Andy, está tudo bem, obrigado!
                        Vamos lá acabar a app :)
                    </p>
                </div>
                <div className='msg-from '>
                    <p className='text-msg'>
                        Vamos lá! Falta pouco!
                    </p>
                </div>
                <div className='msg-to'>
                    <p className='text-msg me'>
                        Ainda agora começamos...
                    </p>
                    <p className='text-msg me '>
                        <img className='send-photo' src={birdPhoto} alt='birdPhoto' />
                    </p>
                </div>
                <div className='msg-from '>
                    <p className='text-msg'>
                        Passarinho ?!
                    </p>
                </div>
                <div className='msg-to'>
                    <p className='text-msg me'>
                        Ele não morde... não tem dentes
                    </p>
                </div>
            </div>
            <NavbarMessaging />
        </div >
    )
}

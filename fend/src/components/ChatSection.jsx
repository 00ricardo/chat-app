import React from 'react'
import NavbarChatSection from './NavbarChatSection'
import Chat from './Chat'
export default function ChatSection() {
    return (
        <div className='chat-section-container'>
            <NavbarChatSection />
            <Chat />
        </div >
    )
}

import React from 'react'
import Sidebar from '../components/Sidebar';
import StorieSection from '../components/StorieSection';
import ChatSection from '../components/ChatSection';

export default function Home() {
    return (
        <div className='chat-app-container'>
            <Sidebar />
            <StorieSection />
            <ChatSection />
        </div>
    )
}

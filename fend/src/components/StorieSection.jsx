import React from 'react'
import ChatList from './ChatList';
import StorieList from './StorieList';

export default function StorieSection() {


    return (
        <div className='storie-section-container'>
            <h3 style={{ margin: '15px' }}>Stories</h3>
            <StorieList />
            <ChatList />
        </div>
    )
}

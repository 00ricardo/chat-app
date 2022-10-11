import React, { useState } from 'react'
import ChatList from './ChatList';
import StorieList from './StorieList';

export default function StorieSection() {

    const [filter, setFilter] = useState('')

    return (
        <div className='storie-section-container'>
            <h3 style={{ margin: '15px' }}>Stories</h3>
            <StorieList setFilter={setFilter} />
            <ChatList filter={filter} />
        </div>
    )
}

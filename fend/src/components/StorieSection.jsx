import React, { useState } from 'react'
import ChatList from './ChatList';
import StorieList from './StorieList';
import Input from '@mui/material/Input';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';

export default function StorieSection() {
    const { section } = useSelector((state) => state.sidebar)
    const [filter, setFilter] = useState('')


    const st = {
        backgroundColor: '#383a3f',
        borderRadius: '10px',
        border: '1px solid #ff5252',
        color: '#bfbcbc',
        margin: '20px',
        width: '-webkit-fill-available',
    }

    const outerTheme = createTheme({
        palette: {
            primary: {
                main: '#a64a4a00'
            },
        },
    });

    return (
        <div className='storie-section-container'>
            <h3 style={{ margin: '15px' }}>Stories</h3>
            <div className='storie-list-container'>
                <StorieList />
                {section === 'Chats' ?
                    <ThemeProvider theme={outerTheme}>
                        <Input
                            onChange={(e) => setFilter(e.target.value)}
                            style={st}
                            size='small'
                            placeholder='Search chat'
                            className='searchat'
                        />
                    </ThemeProvider> : <></>}
            </div>
            {section === 'Chats' ? <ChatList filter={filter} /> :
                section === 'Contacts' ? <h3>Contacts</h3> :
                    section === 'Favs' ? <h3>Favs</h3> :
                        section === 'Store' ? <h3>Store</h3> :
                            section === 'NewChat' ? <h3>New Chat</h3> :
                                <div className='loading'>
                                    <svg viewBox="25 25 50 50" className='spinner'>
                                        <circle cx="50" cy="50" r="20" />
                                    </svg>
                                </div>
            }
        </div>
    )
}

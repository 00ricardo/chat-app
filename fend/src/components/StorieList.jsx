import React from 'react'
import Storie from './Storie'
import ScrollContainer from 'react-indiana-drag-scroll'
import Input from '@mui/material/Input';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function StorieList(props) {
    const stories = [
        {
            person: 'Ricardo Silva',
            viewed: true
        }, {
            person: 'David Briceño',
            viewed: true
        }, {
            person: 'João Góis',
            viewed: true
        }, {
            person: 'João Ferreira',
            viewed: true
        }, {
            person: 'Pedro Santos',
            viewed: true
        }, {
            person: 'Francisco Felix',
            viewed: true
        }, {
            person: 'Andy Gordinho',
            viewed: true
        }
    ]

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
        <div className='storie-list-container'>
            <ScrollContainer className=" storie-list scroll-container">
                {stories.map((str, idx) => (
                    <Storie str={str} id={idx} key={idx} className='storie' />
                ))}
            </ScrollContainer>
            <ThemeProvider theme={outerTheme}>
                <Input
                    onChange={(e) => props.setFilter(e.target.value)}
                    style={st}
                    size='small'
                    placeholder='Search chat'
                    className='searchat'
                />
            </ThemeProvider>
        </div >

    )
}

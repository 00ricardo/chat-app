import React from 'react'
import Storie from './Storie'
import TextField from '@mui/material/TextField';
import ScrollContainer from 'react-indiana-drag-scroll'
export default function StorieList() {
    const stories = [
        {
            person: 'Ricardo Silva',
            viewed: true
        }, {
            person: 'Andreia Silva',
            viewed: true
        }, {
            person: 'Felps Silva',
            viewed: true
        }, {
            person: 'Ferreira Silva',
            viewed: true
        }, {
            person: 'Gois Silva',
            viewed: true
        }, {
            person: 'Yoleida Silva',
            viewed: true
        }, {
            person: 'Diego Silva',
            viewed: true
        },
        {
            person: 'Ricardo Silva',
            viewed: true
        }, {
            person: 'Andreia Silva',
            viewed: true
        }, {
            person: 'Felps Silva',
            viewed: true
        }, {
            person: 'Ferreira Silva',
            viewed: true
        }, {
            person: 'Gois Silva',
            viewed: true
        }, {
            person: 'Yoleida Silva',
            viewed: true
        }, {
            person: 'Diego Silva',
            viewed: true
        },
    ]

    return (
        <div className='storie-list-container'>
            <ScrollContainer className=" storie-list scroll-container">
                {stories.map((str, idx) => (
                    <Storie str={str} id={idx} key={idx} className='storie' />
                ))}
            </ScrollContainer>
            <TextField className='search-input' size='small' label="Search chat" style={{ margin: '20px 35px 20px 20px', width: '-webkit-fill-available' }} />
        </div>

    )
}

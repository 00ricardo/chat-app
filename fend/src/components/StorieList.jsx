import React from 'react'
import Storie from './Storie'
import TextField from '@mui/material/TextField';
import ScrollContainer from 'react-indiana-drag-scroll'
import { styled } from '@mui/material/styles';
export default function StorieList() {
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

    const CustomSearchField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#ff5252',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#ff5252',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#232323',
                borderRadius: '10px'
            },
            '&:hover fieldset': {
                borderColor: '#ff5252',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ff5252',
            },
            backgroundColor: '#383a3f', borderRadius: '10px', color: '#bfbcbc'
        },
        '& label': {
            color: '#bfbcbc',
        },
        '& MuiInputBase-input': {
            color: '#bfbcbc'
        }
    });

    return (
        <div className='storie-list-container'>
            <ScrollContainer className=" storie-list scroll-container">
                {stories.map((str, idx) => (
                    <Storie str={str} id={idx} key={idx} className='storie' />
                ))}
            </ScrollContainer>
            <CustomSearchField
                size='small'
                label="Search chat"
                style={{ margin: '20px 35px 20px 20px', width: '-webkit-fill-available' }}
            />
        </div>

    )
}

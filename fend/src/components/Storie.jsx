import React from 'react'
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
export default function Storie(props) {
    return (
        <ListItem key={props.id} className='storie-item'>
            <Avatar alt={props.str.person} src="/static/images/avatar/1.jpg" className='storie-avatar' />
            <small className='storie-user'>{props.str.person.length > 8 ? props.str.person.slice(0, 9) + '...' : props.str.person}</small>
        </ListItem >
    )
}

import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
export default function Storie(props) {

    return (
        <>
            <ListItem key={props.id} className='storie-item'>
                <Button variant="text" style={{ borderRadius: '50%' }} onClick={props.openModal}>
                    <div className={`${props.str.viewed ? 'opened' : 'new'}-story`}>
                        <Avatar alt={props.str.person} src="/static/images/avatar/1.jpg" />
                    </div>
                </Button>
                <small className='storie-user'>{props.str.person.length > 8 ? props.str.person.slice(0, 9) + '...' : props.str.person}</small>
            </ListItem >
        </>
    )
}

import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

export default function Storie(props) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = (src, alt) => {

        setOpenModal(true);
    }

    const handleClose = () => {
        setOpenModal(false);
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid transparent'
    };

    return (
        <>
            <ListItem key={props.id} className='storie-item'>
                <Button variant="text" style={{ borderRadius: '50%' }} onClick={handleOpen}>
                    <div className={`${props.str.viewed ? 'opened' : 'new'}-story`}>
                        <Avatar alt={props.str.person} src="/static/images/avatar/1.jpg" />
                    </div>
                </Button>
                <small className='storie-user'>{props.str.person.length > 8 ? props.str.person.slice(0, 9) + '...' : props.str.person}</small>
            </ListItem >
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}>
                <Fade in={openModal}>
                    {props.str.stories ?
                        <div style={style}>
                            {props.str.stories.map((story, idx) => (
                                <img key={idx} src={story.img} alt={story.alt} style={{ width: '80%' }} />
                            ))}
                        </div>
                        : <></>}
                </Fade>
            </Modal>
        </>

    )
}

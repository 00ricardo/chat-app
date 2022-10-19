import React from 'react'
import List from '@mui/material/List';
import { Icon } from '@iconify/react';
import logo from '../public/logo.png'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ProfileSettings from './ProfileSettings';
import NewChatSettings from './NewChatSettings';
import { useSelector, useDispatch } from 'react-redux';
import { thunkSectionSelected } from '../redux/services/sectionServices'

export default function Sidebar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);

    const handleClick2 = (event) => {
        setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
        setAnchorEl2(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { section } = useSelector((state) => state.sidebar)
    const dispatch = useDispatch()

    const firstList = {
        NewChat: <Icon icon="carbon:add-filled" width="45" className='custom-red-default-icon pulse' />,
        Chats: <Icon icon="bi:chat" width="25" className={`${section === 'Chats' ? 'custom-red-icon' : 'custom-grey-icon'} chat-icon`} />,
        Contacts: <Icon icon="carbon:user" width="25" className={`${section === 'Contacts' ? 'custom-red-icon' : 'custom-grey-icon'} profile-icon`} />,
        Favs: <Icon icon="clarity:favorite-line" width="25" className={`${section === 'Favs' ? 'custom-red-icon' : 'custom-grey-icon'} fav-icon`} />,
        Store: <Icon icon="clarity:store-line" width="25" className={`${section === 'Store' ? 'custom-red-icon' : 'custom-grey-icon'} store-icon`} />,
    }

    const btnStyle = {
        width: '100%',
        height: '100%',
        padding: 0,
        borderRadius: '12px',
        position: 'relative',
        left: '-10px'
    }

    const selectedSection = (e, icon) => {
        if (icon !== 'NewChat') {
            dispatch(thunkSectionSelected(icon))
        } else {
            handleClick2(e)
        }

    }

    return (
        <div className='sidebar-container'>
            <div className='first-list' style={{ padding: 0 }}>
                <div style={{ padding: 0 }}>
                    <a href='/'>
                        <img className='brandapp' src={logo} height='30px' alt='Chat App Logo' />
                    </a>
                </div>
                {Object.keys(firstList).map((icon, idx) => (
                    <div key={idx} className='iconsec'>
                        <IconButton variant="text"
                            onClick={(e) => selectedSection(e, icon)}
                            style={btnStyle}
                            className={section === icon && icon !== 'NewChat' ? 'active' : ''}>
                            {firstList[icon]}
                        </IconButton>
                    </div>
                ))}
                <NewChatSettings anchorEl={anchorEl2} open={open2} handleClose={handleClose2} />
            </div>
            <List className='second-list' style={{ padding: 0 }}>
                <div className='iconsec' style={{ position: 'relative', left: '-10px' }}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar alt='Ricardo Silva' src="/static/images/avatar/1.jpg" className='chat-avatar' />
                        </IconButton>
                    </Tooltip>
                    <ProfileSettings anchorEl={anchorEl} open={open} handleClose={handleClose} />
                </div>
            </List>
        </div >

    )
}

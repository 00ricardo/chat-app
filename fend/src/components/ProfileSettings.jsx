import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function ProfileSettings(props) {

    const style = {
        elevation: 0,
        sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
        },
    }

    return (
        <Menu
            anchorEl={props.anchorEl}
            id="account-menu"
            open={props.open}
            onClose={props.handleClose}
            onClick={props.handleClose}
            PaperProps={style}
            transformOrigin={{ horizontal: 'left', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" style={{ color: '#ff5252' }} />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small" style={{ color: '#ff5252' }} />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    )
}

import React, { useState } from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import { thunkSetNotificationSettings, thunkSetStatusSettings } from '../redux/services/settingsService'
import { useDispatch, useSelector } from 'react-redux';


export default function ProfileSettings(props) {
    const { notifications, status } = useSelector((state) => state.settings)

    const dispatch = useDispatch()
    const [openedDrawer, setOpenedDrawer] = useState(false)
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

    const handleNotifications = () => {
        dispatch(thunkSetNotificationSettings(!notifications))
    }

    const handleStatus = () => {
        dispatch(thunkSetStatusSettings(!status))
    }

    return (
        <>
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
                <MenuItem onClick={() => setOpenedDrawer(true)}>
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

            <Drawer className='pop'
                variant='temporary'
                anchor={'right'}
                open={openedDrawer}
                onClose={() => setOpenedDrawer(false)}
            >
                <List style={{ background: '#383a3f', minWidth: '150px', maxWidth: '350px', width: '350px' }}>
                    <h3 style={{ marginLeft: '25px', marginTop: '20px', marginBottom: '20px' }}>Settings</h3>
                    <Divider className='divider-settings' style={{ marginBottom: '10px' }} />
                    <ListItem disablePadding style={{ background: '#383a3f', flexDirection: 'column', 'alignItems': 'start' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemButton>
                                <Switch defaultChecked style={{ color: '#fff' }} onChange={(e) => handleNotifications()} checked={notifications} />
                            </ListItemButton>
                            <h8>Receive Notifications</h8>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <ListItemButton>
                                <Switch defaultChecked style={{ color: '#fff' }} onChange={(e) => handleStatus()} checked={status} />
                            </ListItemButton>
                            <h8>Online Status</h8>
                        </div>
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}
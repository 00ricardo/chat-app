import React from 'react'
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import logo from '../public/logo.png'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
export default function PickUserToChat() {

    const CustomBottom = styled(Button)(({ theme }) => ({
        color: '#ff5252',
        backgroundColor: '#686868',
        '&:hover': {
            color: '#ffffffb3',
            backgroundColor: '#ff5252',
        },
    }));


    return (
        <div id='mcontent'>
            <div className='pick-u-header'>
                <h3>Users</h3>
                <CustomBottom id='letstalk' style={{ borderRadius: '5px' }} >
                    Let's talk !
                </CustomBottom>
            </div>
            <Divider />
            <div className='lst-utp'>
                <div className='user-to-pick'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt='hahaha' src={logo} style={{ marginLeft: '15px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', color: '#ffffffb3' }}>
                            <h6>Steve Jobs</h6>
                            <h6>stevejobs@gmail.com</h6>
                        </div>
                    </div>
                    <input type="checkbox" className="checkbox-round" value={'stevejobs@gmail.com'} />
                </div >
                <div className='user-to-pick'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt={'xd'} src={logo} style={{ marginLeft: '15px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', color: '#ffffffb3' }}>
                            <h6>Bill Gates</h6>
                            <h6>billgates@gmail.com</h6>
                        </div>
                    </div>
                    <input type="checkbox" className="checkbox-round" value={'billgates@gmail.com'} />
                </div >
                <div className='user-to-pick'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt={'xd'} src={logo} style={{ marginLeft: '15px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', color: '#ffffffb3' }}>
                            <h6>Ricardo Silva</h6>
                            <h6>ricardodavid@gmail.com</h6>
                        </div>
                    </div>
                    <input id='checkbox-round' type="checkbox" className="checkbox-round" value={'ricardodavid@gmail.com'} />
                </div >
                <div className='user-to-pick'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt='hahaha' src={logo} style={{ marginLeft: '15px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', color: '#ffffffb3' }}>
                            <h6>Guest 1</h6>
                            <h6>guest1@gmail.com</h6>
                        </div>
                    </div>
                    <input type="checkbox" className="checkbox-round" value={'guest1@gmail.com'} />
                </div >
                <div className='user-to-pick'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt={'xd'} src={logo} style={{ marginLeft: '15px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', color: '#ffffffb3' }}>
                            <h6>Guest 2</h6>
                            <h6>guest2@gmail.com</h6>
                        </div>
                    </div>
                    <input type="checkbox" className="checkbox-round" value={'guest2@gmail.com'} />
                </div >
                <div className='user-to-pick'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt={'xd'} src={logo} style={{ marginLeft: '15px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', color: '#ffffffb3' }}>
                            <h6>Guest 3</h6>
                            <h6>guest3@gmail.com</h6>
                        </div>
                    </div>
                    <input id='checkbox-round' type="checkbox" className="checkbox-round" value={'guest3@gmail.com'} />
                </div >
                <div className='user-to-pick'>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar alt={'xd'} src={logo} style={{ marginLeft: '15px' }} />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '20px', color: '#ffffffb3' }}>
                            <h6>Guest 4</h6>
                            <h6>guest4@gmail.com</h6>
                        </div>
                    </div>
                    <input id='checkbox-round' type="checkbox" className="checkbox-round" value={'guest4@gmail.com'} />
                </div>
            </div>
        </div>
    )
}

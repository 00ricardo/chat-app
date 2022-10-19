import React, { useEffect, useState } from 'react'
import NavbarChatSection from './NavbarChatSection'
import Chat from './Chat'
import { ReactSVG } from 'react-svg'
import svg from '../public/svg.svg'
import $ from 'jquery'
import iziModal from 'izimodal/js/iziModal';
import { thunkSetChatID } from '../redux/services/chatServices'
import { thunkAddChatToList } from '../redux/services/chatListServices'
import { useDispatch, useSelector } from 'react-redux';

export default function ChatSection() {
    const { chatID } = useSelector((state) => state.chat)
    const { chatList } = useSelector((state) => state.conversations)
    const dispatch = useDispatch()

    const [invitedUsers, setInvitedUsers] = useState([])
    const [createChat, setCreateChat] = useState(false)


    const handleNewChat = () => {
        $.fn.iziModal = iziModal;
        const modal = $('#modal-new-chat')
        modal.iziModal('open')
    }

    const initNewConversation = () => {

        console.log(invitedUsers)

        dispatch(thunkSetChatID('fjmwnufusdfsdfh8smdfu'))

        //add chat to list with invited users
        dispatch(thunkAddChatToList(
            [...chatList, {
                chatID: 'fjmwnufusdfsdfh8smdfu',
                person: '',
                last_message: '',
                time: ''
            }]
        ))
    }

    const resetForm = () => {
        setCreateChat(false)
        setInvitedUsers([])
        const checkboxes = $('.checkbox-round')
        for (let index = 0; index < checkboxes.length; index++) {
            const element = checkboxes[index];
            element.checked = false
        }
        const modal = $('#modal-new-chat')
        modal.iziModal('close')
    }

    const handleSVG = (err, svg) => {
        const svgDoc = document.getElementById('svg-cn-chat')
        if (svgDoc) {
            svgDoc.style.cursor = 'pointer'
            svgDoc.addEventListener('click', () => {
                handleNewChat()
            })
        }
    }

    useEffect(() => {
        const modal = $('#modal-new-chat')
        modal.iziModal({
            title: 'New Chat',
            background: '#404144',
            headerColor: 'transparent',
        });
    }, [])

    useEffect(() => {
        $('.checkbox-round').click((e) => {
            let usr = e.target.value
            if (invitedUsers.includes(usr) && !e.target.checked) {
                const index = invitedUsers.indexOf(usr);
                if (index > -1) {
                    //remove usr
                    invitedUsers.splice(index, 1);
                    setInvitedUsers([...invitedUsers])
                }
            } else {
                //add usr
                setInvitedUsers([...invitedUsers, usr])
            }
        })

        const lt = $('#letstalk')
        invitedUsers.length !== 0 ? lt.css('display', 'block') : lt.css('display', 'none')

    }, [invitedUsers])

    useEffect(() => {
        const lt = $('#letstalk')

        lt.on('click', (e) => {
            if (!createChat) {
                setCreateChat(true)
            }
        })

        if (createChat) {
            initNewConversation()
            resetForm()
        }

    }, [createChat])

    return (
        <div className='chat-section-container'>
            {chatID !== null ?
                <>
                    <NavbarChatSection />
                    <Chat />
                </> :
                <div className='default-chat-state'>
                    <ReactSVG src={svg} afterInjection={(error, svg) => handleSVG(error, svg)} />
                </div>
            }
        </div >
    )
}

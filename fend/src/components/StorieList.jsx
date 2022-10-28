import React, { useEffect } from 'react'
import Storie from './Storie'
import ScrollContainer from 'react-indiana-drag-scroll'
import { useSelector, useDispatch } from 'react-redux';
import { thunkFetchStorieList, thunkSetStoryVision, thunkSetUserStoryVision } from '../redux/services/storieListServices'
import $ from 'jquery'
import iziModal from 'izimodal/js/iziModal';

export default function StorieList(props) {
    const { storieList } = useSelector((state) => state.stories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(thunkFetchStorieList())
    }, [dispatch])


    const openModal = async (id, str) => {
        let name = str.person
        let indexToShow = 0

        $.fn.iziModal = iziModal;

        str.stories.forEach(s => {
            $(`#modal-${id}-${name}-${s.alt}`).iziModal({
                title: str.person,
                subtitle: s.timestamp,
                headerColor: '#202124',
                group: `gp-${id}-${name}`,
                timeout: 5000,
                timeoutProgressbar: true,
                timeoutProgressbarColor: '#ff5252',
                pauseOnHover: true
            });

            //photo modal-2-PedroSantos-bear_photo do grupo  gp-2-PedroSantos

            $(`#modal-${id}-${name}-${s.alt}`).iziModal('setContent',
                `<div class='kilo'> 
                    <img class='strphotostr' src=${s.img} alt=${s.alt}></img>
                </div>`
            );

            $(document).on('opening', `#modal-${id}-${name}-${s.alt}`, function (e) {
                var pht = e.currentTarget.id
                var info = pht.split('-')
                var uid = info[1]
                var salt = info[3]
                const sid = storieList[uid].stories.indexOf(s)

                if (s.alt === salt) {
                    //set vision to current story
                    dispatch(thunkSetStoryVision({ userID: uid, storyID: sid }))
                    if (sid === storieList[uid].stories.length - 1) {
                        //set vision to storie group
                        dispatch(thunkSetUserStoryVision({ userID: uid }))
                    }
                }
            });
        })


        var array = storieList[id].stories
        for (let index = 0; index < array.length; index++) {
            var _str = array[index];
            if (!storieList[id].viewed) {
                if (!_str.viewed) {
                    if (index === array.length - 1) {
                        indexToShow = 0
                    }
                    indexToShow = index
                    break
                }
            }
        }

        $(`#modal-${id}-${name}-${str.stories[indexToShow].alt}`).iziModal('open')

    }

    return (

        <ScrollContainer className=" storie-list scroll-container">
            {storieList.map((str, idx) => (
                <div key={idx}>
                    <Storie str={str} id={idx} className='storie' openModal={() => openModal(idx, str)} />
                    {str.stories.map((s, i) => (
                        <div key={i}
                            id={`modal-${idx}-${str.person}-${s.alt}`}
                            className="iziModal"
                            data-izimodal-group={`gp-${idx}-${str.person}`}
                            style={{ maxHeight: '500px' }} />
                    ))}
                </div>
            ))}
        </ScrollContainer>

    )
}

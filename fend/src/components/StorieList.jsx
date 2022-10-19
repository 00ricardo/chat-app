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

            $(`#modal-${id}-${name}-${s.alt}`).iziModal('setContent',
                `<div class='kilo'> 
                    <img class='strphotostr' src=${s.img} alt=${s.alt}></img>
                </div>`
            );
        })

        var indexToShow = 0
        var array = storieList[id].stories
        for (let index = 0; index < array.length; index++) {
            var _str = array[index];
            if (!storieList[id].viewed) {
                if (!_str.viewed) {
                    if (index === array.length - 1) {
                        dispatch(thunkSetUserStoryVision({ userID: id }))
                        indexToShow = 0
                    }
                    indexToShow = index
                    dispatch(thunkSetStoryVision({ userID: id, storyID: indexToShow }))
                    break
                }
            }
        }


        $(document).on('iziModal-group-change', function (e, modal) {
            let outid = modal.out.id
            let gp = modal.out.group
            let modalIndex = gp.ids.indexOf(outid)

            indexToShow = modalIndex
            if (modalIndex + 2 === gp.ids.length) {
                dispatch(thunkSetStoryVision({ userID: id, storyID: indexToShow })) // one more story viewed
                dispatch(thunkSetStoryVision({ userID: id, storyID: indexToShow + 1 })) //last story -> force to 
                dispatch(thunkSetUserStoryVision({ userID: id })) //complete proccess
                indexToShow = 0
            } else {
                dispatch(thunkSetStoryVision({ userID: id, storyID: indexToShow })) // one more story viewed
            }
        });

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

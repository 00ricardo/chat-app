// Action Payload

const sortByView = (stories) => {
    let sorted = stories.sort((strA, strB) => (strA.viewed === strB.viewed) ? 0 : strA.viewed ? 1 : -1)
    return sorted
}
const stories = [
    {
        person: 'RicardoSilva',
        viewed: false,
        stories: [
            {
                img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                timestamp: '18:10',
                alt: 'pinguim_photo',
                viewed: false
            },
            {
                img: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg',
                timestamp: '18:12',
                alt: 'lion_photo',
                viewed: false
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg',
                timestamp: '18:13',
                alt: 'bear_photo',
                viewed: false
            }
        ]
    }, {
        person: 'DavidBriceño',
        viewed: false,
        stories: [
            {
                img: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg',
                timestamp: '18:12',
                alt: 'lion_photo',
                viewed: false
            },
        ]
    }, {
        person: 'JoãoGóis',
        viewed: true,
        stories: [
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg',
                timestamp: '18:13',
                alt: 'bear_photo',
                viewed: true
            }
        ]
    }, {
        person: 'JoãoFerreira',
        viewed: true,
        stories: [
            {
                img: 'https://www.infoescola.com/wp-content/uploads/2017/04/leao-126767138.jpg',
                timestamp: '18:12',
                alt: 'lion_photo',
                viewed: true
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg',
                timestamp: '18:13',
                alt: 'bear_photo',
                viewed: true
            }
        ]
    }, {
        person: 'PedroSantos',
        viewed: false,
        stories: [
            {
                img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                timestamp: '18:10',
                alt: 'pinguim_photo',
                viewed: true
            },
            {
                img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/2010-brown-bear.jpg',
                timestamp: '18:13',
                alt: 'bear_photo',
                viewed: false
            }
        ]
    }, {
        person: 'FranciscoFelix',
        viewed: true,
        stories: [
            {
                img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                timestamp: '18:10',
                alt: 'pinguim_photo',
                viewed: true
            }
        ]
    }, {
        person: 'AndyGordinho',
        viewed: false,
        stories: [
            {
                img: 'https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/shutterstock_1512536354.jpg?crop=0%2C317%2C2664%2C1465&wid=4000&hei=2200&scl=0.666',
                timestamp: '18:10',
                alt: 'butterfly_photo',
                viewed: false
            }
        ]
    }
]
var control = true
const fetchStorieList = async (storiess) => {
    var res
    if (control) {
        res = stories
        control = false
    } else {
        res = storiess
    }
    const sortedStories = sortByView(res)

    return sortedStories
}


const setStoryVision = async (state) => {
    let { storyID, userID } = state
    return { storyID: storyID, userID: userID }
}

const setUserStoriesVision = async (state) => {
    let { userID } = state
    return { userID: userID }
}

export {
    fetchStorieList,
    setStoryVision,
    setUserStoriesVision
}
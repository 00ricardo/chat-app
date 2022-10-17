// Action Payload

const fetchChatMessages = async (state) => {
    if (state === 0) {
        const messages = [
            {
                user: 'Guest',
                msg: 'Hello, how did you build this app?',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'Hello, I build this app based on Tinnos Template!',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'https://tinno.laborasyon.com/chat.html?demo=dark',
                timestamp: '17:39'
            },
            {
                user: 'Guest',
                msg: 'Did you use his code?',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'No, I just tried to clone his design, all the code was made by myself :)',
                timestamp: '17:39'
            },
            {
                user: 'Guest',
                msg: 'WOW! Impressive! Which technologies did you use?',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'React and Material UI for the frontend with a pinch of Redux to help me to handle some global states!',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'In the other hand, Im using NestJS (Node) with Firebase to handle all the server and the data :P',
                timestamp: '17:39'
            },
            {
                user: 'Guest',
                msg: 'Why did you use these tecnologies?',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'Im comfortable with these ones. ',
                timestamp: '17:39'
            },
            {
                user: 'Guest',
                msg: 'Thank you ! 👐',
                timestamp: '17:39'
            },
        ]
        return messages
    } else {
        return []
    }
}

const sendChatMessage = async (state) => {
    return state
}

const getChatID = async (state) => {
    return state
}

export {
    fetchChatMessages,
    sendChatMessage,
    getChatID
}
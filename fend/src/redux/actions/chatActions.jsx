// Action Payload

const fetchChatMessages = async (state) => {
    if (state === 1) {
        const messages = [
            {
                user: 'Andreia Farinha',
                msg: 'Olá Ricardo, tudo bem?',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'Olá, está tudo e contigo?',
                timestamp: '17:39'
            },
            {
                user: 'Andreia Farinha',
                msg: 'Mais ou menos, estou cansada.',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'Descansa um pouco agora.',
                timestamp: '17:39'
            },
            {
                user: 'Andreia Farinha',
                msg: 'Sim, vou ver House of the Dragon agora.',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'Viserys Targarian wins Emmy :V',
                timestamp: '17:39'
            },
            {
                user: 'Andreia Farinha',
                msg: 'Good King though',
                timestamp: '17:39'
            },
            {
                user: 'Ricardo Silva',
                msg: 'Dracarysss',
                timestamp: '17:39'
            }
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
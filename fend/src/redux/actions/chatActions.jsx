// Action Payload

const fetchChatMessages = async (state) => {
    if (state === 1) {
        const messages = [
            {
                user: 'Andreia Farinha',
                messages: [
                    {
                        msg: 'Olá Ricardo, tudo bem?',
                        timestamp: '17:39'
                    }],
            },
            {
                user: 'Ricardo Silva',
                messages: [
                    {
                        msg: 'Olá Andreia, está tudo bem e contigo?',
                        timestamp: '17:41'
                    },
                    {
                        msg: 'Esperei pela tua mensagem o dia inteiro :)',
                        timestamp: '17:41'
                    },
                ],
            },
            {
                user: 'Andreia Farinha',
                messages: [
                    {
                        msg: 'Só consegui um tempinho agora... Mas já aqui estou :)',
                        timestamp: '17:43'
                    }, {
                        msg: 'Como foi o teu dia?',
                        timestamp: '17:43'
                    },
                ],
            },
            {
                user: 'Ricardo Silva',
                messages: [
                    {
                        msg: 'Normal e o teu?',
                        timestamp: '17:44'
                    },
                ],
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
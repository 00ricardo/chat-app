// Action Payload

const fetchChatList = async () => {
    const conversations = [
        {
            person: 'Guest',
            last_message: 'Thank you ! 👐',
            time: '11pm'
        }
    ]

    return conversations
}

export {
    fetchChatList
}
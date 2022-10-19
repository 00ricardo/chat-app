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


const addChatToList = async (state) => {
    return state
}

export {
    fetchChatList,
    addChatToList
}
// Action Payload

const fetchStorieList = async () => {
    const stories = [
        {
            person: 'Ricardo Silva',
            viewed: true
        }, {
            person: 'David Briceño',
            viewed: true
        }, {
            person: 'João Góis',
            viewed: true
        }, {
            person: 'João Ferreira',
            viewed: true
        }, {
            person: 'Pedro Santos',
            viewed: true
        }, {
            person: 'Francisco Felix',
            viewed: true
        }, {
            person: 'Andy Gordinho',
            viewed: true
        }
    ]

    return stories
}


export {
    fetchStorieList
}
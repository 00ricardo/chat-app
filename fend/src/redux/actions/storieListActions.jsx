// Action Payload

const sortByView = (stories) => {
    let sorted = stories.sort((strA, strB) => (strA.viewed === strB.viewed) ? 0 : strA.viewed ? 1 : -1)
    return sorted
}

const fetchStorieList = async () => {
    const stories = [
        {
            person: 'Ricardo Silva',
            viewed: false,
            stories: [
                {
                    img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                    timestamp: '18:10',
                    alt: 'pinguim_photo'
                }
            ]
        }, {
            person: 'David Briceño',
            viewed: false,
            stories: [
                {
                    img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                    timestamp: '18:10',
                    alt: 'pinguim_photo'
                }
            ]
        }, {
            person: 'João Góis',
            viewed: true, stories: [
                {
                    img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                    timestamp: '18:10',
                    alt: 'pinguim_photo'
                }
            ]
        }, {
            person: 'João Ferreira',
            viewed: true, stories: [
                {
                    img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                    timestamp: '18:10',
                    alt: 'pinguim_photo'
                }
            ]
        }, {
            person: 'Pedro Santos',
            viewed: false,
            stories: [
                {
                    img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                    timestamp: '18:10',
                    alt: 'pinguim_photo'
                }
            ]
        }, {
            person: 'Francisco Felix',
            viewed: true,
            stories: [
                {
                    img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                    timestamp: '18:10',
                    alt: 'pinguim_photo'
                }
            ]
        }, {
            person: 'Andy Gordinho',
            viewed: false,
            stories: [
                {
                    img: 'https://www.vivernatural.com.br/wp-content/uploads/2018/04/%D0%9F%D0%B8%D0%BD%D0%B3%D0%B2%D0%B8%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-min.jpg',
                    timestamp: '18:10',
                    alt: 'pinguim_photo'
                }
            ]
        }
    ]

    const sortedStories = sortByView(stories)

    return sortedStories
}


export {
    fetchStorieList
}
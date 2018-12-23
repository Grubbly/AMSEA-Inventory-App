const initState = {
    projects: [
        {id: '1', title: 'Tristan', content: 'stuff'},
        {id: '2', title: 'Grubsy', content: 'more stuff'},
        {id: '3', title: 'Grubby', content: 'even more stuff'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer
const initState = {
    projects: [
        {id: '1', title: 'Tristan', content: 'stuff'},
        {id: '2', title: 'Grubsy', content: 'more stuff'},
        {id: '3', title: 'Grubby', content: 'even more stuff'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
                
        default:
            return state;
    }
}

export default projectReducer
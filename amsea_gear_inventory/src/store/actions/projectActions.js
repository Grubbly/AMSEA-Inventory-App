// Deals with adding, deleting, etc. projects
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Async calls to database here!   
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Tristan',
            authorLastName: 'Grubsy',
            authorId: 7,
            createdAt: new Date()
        }).then(() => {
            // Carry on with dispatch as normal
            dispatch({type: 'CREATE_PROJECT', project});
            }).catch((err) => {
                dispatch({type: 'CREATE_PROJECT_ERROR', err});  
            })
    }
}
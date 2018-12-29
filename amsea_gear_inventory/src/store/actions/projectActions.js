// Deals with adding, deleting, etc. projects
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Async calls to database here!   
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            // Carry on with dispatch as normal
            dispatch({type: 'CREATE_PROJECT', project});
            }).catch((err) => {
                dispatch({type: 'CREATE_PROJECT_ERROR', err});  
            })
    }
}
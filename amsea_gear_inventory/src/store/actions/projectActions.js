// Deals with adding, deleting, etc. projects
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // Async calls to database here!
        
        // Carry on with dispatch as normal
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}
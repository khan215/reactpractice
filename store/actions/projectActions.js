export const createProject = (projects) => {
    return (dispatch,getState) => {   
        dispatch({ type: 'CREATE_PROJECT', projects});
    }
};
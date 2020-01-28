const createProject = projects => (dispatch, getState, { getFirestore }) => {
    const fireStore = getFirestore();
    //const { profile } = getState().firebase;
    //const authorId = getState().firebase.auth.uid;
  
    fireStore.collection('projects').add({
      ...projects,
      authorFirstName: 'Dawood',
      authorLastName: 'Shamim',
      authorId :12345,
      createdAt: new Date(),
    }).then(() => dispatch({
      type: 'CREATE_PROJECT',
      projects,
    })).catch(err => dispatch({
      type: 'CREATE_PROJECT_ERROR',
      err,
    }));
  };
  
  export default createProject;
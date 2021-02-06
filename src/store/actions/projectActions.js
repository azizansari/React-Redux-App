export const createProject = (project) => {
  return (dispatch, getState, { getFirebase }) => {
    // async call to database

    const firestore = getFirebase().firestore() ;
    const profile = getState().firebase.profile
    const autherId = getState().firebase.auth.uid
    firestore
      .collection("projects")
      .add({
        ...project,
        autherFirstName: profile.firstName,
        autherLastName: profile.lastName,
        autherId: autherId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .then((err) => {
        dispatch({ type: "CREATE_PROJECT_ERR" , err });
      });
  };
};

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from 'moment'
const ProjectDetails = (props) => {
  const { project } = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
    <div>Posted by {project.autherFirstName} {project.autherLastName}</div>
            <div>{moment(project.createdAt.toDate()).fromNow()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return <p>Loding...</p>;
  }
};

const mapStateToProp = (state, ownProp) => {
  // console.log(state);
  const id = ownProp.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
  };
};

export default compose(
  connect(mapStateToProp),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectDetails);

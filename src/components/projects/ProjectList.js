import React from "react";
import ProjectSummury from "./ProjectSummury"
import {NavLink} from 'react-router-dom'
const ProjectList = ({projects}) => {

  return (
    <div className="project-list section">
      {projects && projects.map((project) =>{
        return (
          <NavLink to={'/project/' + project.id} key={project.id}><ProjectSummury  project={project} /></NavLink>
        )
      })}
    </div>
  );
};

export default ProjectList;

import React from "react";
import ProjectSummury from "./ProjectSummury"
const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {projects && projects.map((project) =>{
        return (
          <ProjectSummury key={project.id} project={project} />
        )
      })}
    </div>
  );
};

export default ProjectList;

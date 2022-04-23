import React from 'react'
import ProjectCardContainer from "./ProjectStyle"
import TwoCircleButton from "../TwoCircleButton/TwoCircleButton"
import styled from "styled-components"
import Button from '../Button/Button';

const ModifiedTwoCircleButton = styled(TwoCircleButton)`
    a{
      font-size: max(1.5vw, 12px);
    }
    .circle_button{
        width: 12vw;
        height: 5vw;
    }

@media only screen and (max-width: 600px){
    a{
        font-size: 4vw;
    }
    .circle_button{
        width: 35vw;
        height: 20vw;
    }
}
`;
const ProjectCard = ({
  project_title,
  project_desc,
  project_number,
  button_link,
  showButton,
  edit_button_handler,
  delete_button_handler,
  id,
  tag
}) => {

  let show = "";
  if (showButton) {
    show = (
      <div className="controller">
        <Button clickHandler={() => edit_button_handler(project_title, button_link, project_desc, tag, id)}>EDIT</Button>
        <Button clickHandler={() => delete_button_handler(id)}>DELETE</Button>
      </div>
    )
  }

  return (
    <ProjectCardContainer>
      <h1 className="project_number">{project_number}</h1>
      <h1 className="project_card_heading">{project_title}</h1>
      <h2 className="project_card_desc">{project_desc}</h2>
      <ModifiedTwoCircleButton link={button_link} text="READ MORE" />
      {show}
    </ProjectCardContainer>
  )
}

export default ProjectCard
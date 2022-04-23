import React from 'react'
import Button from '../Button/Button'
import SkillBoxStyle from "./SkillBoxStyle"

const SkillBox = ({
  title,
  percentage,
  index_number,
  edit_button_handler,
  delete_button_handler,
  id
}) => {
  return (
    <SkillBoxStyle>
      <h1 className="title">{index_number}. {title} ({percentage}%)</h1>
      <div className="skill_button_controller">
        <Button clickHandler={() => edit_button_handler(title, percentage, id)} >EDIT</Button>
        <Button clickHandler={() => delete_button_handler(id)} >DELETE</Button>
      </div>
    </SkillBoxStyle>
  )
}

export default SkillBox
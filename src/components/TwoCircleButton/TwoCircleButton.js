import React from 'react'
import TwoCircleButtonStyle from './TwoCircleButtonStyle'

const TwoCircleButton = (props) => {
  return (
    <TwoCircleButtonStyle className={props.className} onClick={props.buttonClicked}>
        <a href={props.link} class="hire_me_button">{props.text}</a>
        <div className="circle_button circle_1"></div>
        <div className="circle_button circle_2"></div>
    </TwoCircleButtonStyle>
  )
}

export default TwoCircleButton
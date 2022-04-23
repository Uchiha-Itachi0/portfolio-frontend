import React from 'react'
import CircularRotatingImgStyle from './CircularRotatingImgStyle'
import Image from "../../assets/images/circular.png"

const CircularRotatingImg = ({
    maxSize="5vw",
    minSize="50px",
    rotationSpeed="10s",
    className
}) => {
  return (
    <CircularRotatingImgStyle className={className} maxSize={maxSize} minSize={minSize} 
    rotationSpeed={rotationSpeed}>
        <img src={Image} alt="Circular Rotating Quote"></img>
    </CircularRotatingImgStyle>
  )
}

export default CircularRotatingImg
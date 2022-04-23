import React from 'react'
import ButtonStyle from './ButtonStyle'

const Button = ({children, clickHandler}) => {
  return (
    <ButtonStyle onClick={clickHandler}>{children}</ButtonStyle>
  )
}

export default Button
import React, { useState } from 'react'
import TagContainer from './TagStyle'

const Tag = props => {

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => setToggle(!toggle);
  return (
    <TagContainer toggle={toggle}
    onClick={() => {
        props.handleclick()
        handleToggle();
    }}>{props.children}</TagContainer>
  )
}

export default Tag
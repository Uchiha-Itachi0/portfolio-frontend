import React from 'react'
import Heading from './SectionHeadingStyle'

const SectionHeading = (props) => {
  return (
    <Heading isSecondary={props.isSecondary}>{props.children}</Heading>
  )
}

export default SectionHeading
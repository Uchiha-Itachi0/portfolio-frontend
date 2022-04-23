import React from 'react'
import DisplayPercentWithTitle from "./PercentageDisplayerStyle";

const PercentageDisplayer = ({
    children,
    title,
    percentage,
    index_number
}) => {
  return (
    <DisplayPercentWithTitle 
    title={title} 
    percentage={percentage} 
    index_number={index_number}>{children}</DisplayPercentWithTitle>
  )
}

export default PercentageDisplayer
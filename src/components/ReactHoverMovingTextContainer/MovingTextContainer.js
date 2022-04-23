/* 
----------------------Props----------------------
containerBackgroundColor
wallpaperColor
minFontSize
maxFontSize
movingTextColor
movingTextText

Want to increase the padding of the moving text

const ModifiedMovingTextContainer = styled(MovingTextContainer)`
@media only screen and (max-width: 450px){
  padding-left: 120%;
}
@media only screen and (max-width: 350px){
  padding-left: 150%;
}
@media only screen and (max-width: 280px){
  padding-left: 250%;
}

now use ModifiedMovingTextContainer
*/

import React, { useState } from 'react'
import MovingText from './MovingText'
import { Container } from './MovingTextStyle'

const MovingTextContainer = ({
  moving_text_container_background_color = "transparent",
  moving_text_margin = "0 0 1.5em 0",
  children,
  moving_text_wallper_color = "blue",
  moving_Text_min_font_size = "5vw",
  moving_text_max_font_size = "50px",
  moving_text_color = "red",
  moving_text_text = "Just take me home",
  moving_text_font_weight = "300",
  className

}) => {

  const [showMovingText, setShowMovingText] = useState(false)

  const handleMouseEnter = () => setShowMovingText(true)
  const handleMouseLeave = () => setShowMovingText(false)
  return (
    <Container onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      containerBackgroundColor={moving_text_container_background_color}
      margin={moving_text_margin}>
      {children}
      <MovingText
        wallpaper_color={moving_text_wallper_color}
        min_font_size={moving_Text_min_font_size}
        max_font_size={moving_text_max_font_size}
        moving_text_color={moving_text_color}
        show_moving_text={showMovingText}
        moving_text_text={moving_text_text}
        edit={className}
        moving_text_font_weight={moving_text_font_weight}
      />
    </Container>
  )
}

export default MovingTextContainer
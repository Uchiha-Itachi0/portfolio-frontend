import React from 'react'
import { ParaContainer, MovingText1 } from './MovingTextContainerStyles'
import { motion } from 'framer-motion'

  const text1 = {
    initial: {
      x: "0"
    },
    animate: {
      x: "-100%",
      transition: {
        duration: 14,
        repeat: Infinity,
        type: "tween",
        ease: "linear"
      }
    }
  }

  const text2 = {
    initial: {
      x: "0"
    },
    animate: {
      x: "-100%",
      zIndex: 100,
      transition: {
        duration: 14,
        repeat: Infinity,
        type: "tween",
        ease: "linear",
        delay: 7
      }
    }
  }
const MovingTextContainer = (props) => {
    return (
        <>
            <ParaContainer
                as={motion.p}

                minFontSize={props.minFontSize}
                maxFontSize={props.maxFontSize}
                movingTextColor={props.movingTextColor}
                movingTextFontWeight={props.movingTextFontWeight}
            >
                <MovingText1 className={props.className}
                    as={motion.span}
                    variants={text1}
                    initial="initial"
                    animate="animate">
                    {props.movingTextText}
                </MovingText1>
            </ParaContainer>
            <ParaContainer
                as={motion.p}
                minFontSize={props.minFontSize}
                maxFontSize={props.maxFontSize}
                movingTextColor={props.movingTextColor}
                movingTextFontWeight={props.movingTextFontWeight}

            >
                <MovingText1 className={props.className}
                    as={motion.span}
                    variants={text2}
                    initial="initial"
                    animate="animate">
                    {props.movingTextText}
                </MovingText1>
            </ParaContainer>
        </>
    )
}

export default MovingTextContainer
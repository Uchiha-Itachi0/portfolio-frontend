/* 

---------------Props------------------------

ALL THE PROPS SHOULD BE STRING

For making the container responsive
-------------------
minContainerWidth
maxContainerWidth
minContainerHeight
maxContainerHeightx 
--------------------

containerColor

menuBarHeight
menuBarColor

----------------IMPORTANT-----------------
simplay create a use state and pass the value
toggle
setMenuToggle

*/


import { motion } from 'framer-motion';
import React from 'react'
import { MenuContainer, MenuBar } from "./BurgerMenuStyle";
import PropTypes from "prop-types";

const BurgerMenu = (props) => {
    const {
        minBurgerContainerSize = "5vw",
        maxBurgerContainerSize = "50px",
        burgerContainerColor = "transparent",
        burgerMenuBarHeight = "10%",
        burgerMenuBarColor = "#000",
        burgerMenuBarAfterColor="#000",
        toggle,
        setMenuToggle,

    } = props

    const handleMenuToggle = () => setMenuToggle(!toggle);
    const lowerMenuBar = {
        initial: {
            rotateZ: 0,
            y: 0,
            transition: {
                duration: .5,
            }
        },
        animate: {
            rotateZ: -45,
            left: "5%",
            top: "-30%",
            transition: {
                duration: .5,
            }
        }
    }
    const upperMenuBar = {
        initial: {
            rotateZ: 0,
            y: 0,
            transition: {
                duration: .5,
            }
        },
        animate: {
            rotateZ: 45,
            left: "5%",
            top: "35%",
            transition: {
                duration: .5,
            }
        }
    }

    const middleMenuBar = {
        initial: {
            x: 0,
            opacity: 1,
            transition: {
                duration: .5,

            }
        },
        animate: {
            x: 100,
            opacity: 0,
            transition: {
                duration: .5
            }
        }
    }

    return (
        <MenuContainer
            minContainerSize={minBurgerContainerSize}
            maxContainerSize={maxBurgerContainerSize}
            containerColor={burgerContainerColor}
            onClick={handleMenuToggle}

        >
            <MenuBar
                menuBarHeight={burgerMenuBarHeight}
                menuBarColor={toggle ? burgerMenuBarAfterColor : burgerMenuBarColor}
                as={motion.span}
                variants={upperMenuBar}
                initial="initial"
                animate={toggle ? "animate" : "initial"}></MenuBar>
            <MenuBar
                menuBarHeight={burgerMenuBarHeight}
                menuBarColor={toggle ? burgerMenuBarAfterColor : burgerMenuBarColor}
                as={motion.span}
                variants={middleMenuBar}
                initial="initial"
                animate={toggle ? "animate" : "initial"}></MenuBar>
            <MenuBar
                menuBarHeight={burgerMenuBarHeight}
                menuBarColor={toggle ? burgerMenuBarAfterColor : burgerMenuBarColor}
                as={motion.span}
                variants={lowerMenuBar}
                initial="initial"
                animate={toggle ? "animate" : "initial"}></MenuBar>
        </MenuContainer>
    )
}

BurgerMenu.propTypes = {
    minContainerSize: PropTypes.string,
    maxContainerSize: PropTypes.string,
    containerColor: PropTypes.string,
    menuBarHeight: PropTypes.string,
    menuBarColor: PropTypes.string,
    toggle: PropTypes.bool.isRequired,
    setMenuToggle: PropTypes.func.isRequired

}

export default BurgerMenu
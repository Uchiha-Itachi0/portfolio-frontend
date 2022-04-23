import React from 'react'
import BurgerMenu from '../ReactBurgerMenu/BurgerMenu'
import { LogoContainer, NavContainer, LogoHeading, NavMenuItem, StaggerDiv, StaggerDivChildren } from './ReactStaggerNavbarStyle'
import { motion } from 'framer-motion';
import PropTypes from "prop-types";

const navItem = {
    initial: {
        y: "-200vh",
        transition: {
            duration: .5,
        }
    },
    animate: {
        y: 0,
        transition: {
            duration: .5,
            delay: .5
        }
    }
}

const staggerDiv = {
    initial: {
        y: "-100vh",
        transition: {
            delay: .5,
            duration: .5,
            staggerChildren: .1
        }
    },
    animate: {
        y: 0,
        transition: {
            duration: .5,
            staggerChildren: .1
        }
    }
}

const staggerDivChildren = {
    initial: {
        y: "-100vh",
        transition: {
            duration: .5
        }
    },
    animate: {
        y: 0,
        transition: {
            duration: .5
        }
    }
}


const ReactStaggerNavbar = ({
    background_color = "#3ebfff",
    padding = "2em",
    min_logo_size = "5vw",
    max_logo_size = "50px",
    logo_background_img,
    logo_background_size = "contain",
    is_logo_img = true,
    logo_heading = "Logo",
    logo_color = "black",
    logo_after_color = "black",
    min_logo_font_size = "5vw",
    max_logo_font_size = "50px",
    min_burger_container_size = "5vw",
    max_burger_container = "50px",
    burger_container_color = "transparent",
    burger_menu_bar_height = "10%",
    burger_menu_bar_color = "#000",
    burger_menu_bar_after_color = "#000",
    stagger_children = "yellow",
    children,
    toggle,
    set_menu_toggle
}) => {


    return (
        <>
            <NavContainer
                backgroundColor={background_color}
                padding={padding}>
                {is_logo_img ? <LogoContainer
                    minLogoWidth={min_logo_size}
                    maxLogoWidth={max_logo_size}
                    logoBackgroundImg={logo_background_img}
                    logoBackgroundSize={logo_background_size}
                /> :
                    <LogoHeading
                        logoColor={toggle ? logo_after_color : logo_color}
                        minLogoFontSize={min_logo_font_size}
                        maxLogoFontSize={max_logo_font_size}>{logo_heading}</LogoHeading>}
                <BurgerMenu
                    minBurgerContainerSize={min_burger_container_size}
                    maxBurgerContainerSize={max_burger_container}
                    burgerContainerColor={burger_container_color}
                    burgerMenuBarHeight={burger_menu_bar_height}
                    burgerMenuBarColor={burger_menu_bar_color}
                    burgerMenuBarAfterColor={burger_menu_bar_after_color}
                    toggle={toggle}
                    setMenuToggle={set_menu_toggle}
                />
            </NavContainer>

            <NavMenuItem
                as={motion.div} variants={navItem}
                initial="initial"
                animate={toggle ? "animate" : "initial"}>
                {children}
            </NavMenuItem>

            <StaggerDiv
                as={motion.div}
                variants={staggerDiv}
                initial="initial"
                animate={toggle ? "animate" : "initial"}>
                <StaggerDivChildren
                    staggerColor={stagger_children}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={stagger_children}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={stagger_children}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={stagger_children}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
                <StaggerDivChildren
                    staggerColor={stagger_children}
                    as={motion.div}
                    variants={staggerDivChildren}
                />
            </StaggerDiv>
        </>
    )
}

ReactStaggerNavbar.propTypes = {
    backgound_color: PropTypes.string,
    padding: PropTypes.string,
    minLogoSize: PropTypes.string,
    maxLogoSize: PropTypes.string,
    logoBackgroundImg: PropTypes.string,
    logoBackgroundSize: PropTypes.string,
    is_logo_img: PropTypes.bool,
    logo_heading: PropTypes.string,
    logo_color: PropTypes.string,
    min_logo_font_size: PropTypes.string,
    max_logo_font_size: PropTypes.string,
    min_burger_container_size: PropTypes.string,
    max_burger_container_size: PropTypes.string,
    burgerContainerColor: PropTypes.string,
    burgerMenuBarHeight: PropTypes.string,
    burger_menu_bar_color: PropTypes.string,
    staggerColor: PropTypes.string,
}

export default ReactStaggerNavbar
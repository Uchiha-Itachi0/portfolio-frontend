import React, { useState } from 'react'
import ReactStaggerNavbar from '../ReactStaggerNavbar.js/ReactStaggerNavbar'
import { Link } from "react-router-dom"
import NavItemContainer from './NavBarStyle'
import MovingTextContainer from '../ReactHoverMovingTextContainer/MovingTextContainer'
const NavBar = () => {

    const [toggle, setMenuToggle] = useState(false);

    const handleMenuToggle = () => setMenuToggle(!toggle)
    return (
        <>
            <ReactStaggerNavbar
                background_color="transparent"
                padding="1em 2em"
                is_logo_img={false}
                logo_heading="AS"
                min_logo_font_size="2vw"
                max_logo_font_size="3em"
                logo_color="#324235"
                logo_after_color="#FFF6E6"
                min_burger_container_size="2vw"
                max_burger_container_size="3em"
                burger_menu_bar_color="#324235"
                burger_menu_bar_after_color="#FFF6E6"
                stagger_children="#324235"
                toggle={toggle}
                set_menu_toggle={setMenuToggle}
            >
                <NavItemContainer>
                    <MovingTextContainer
                        moving_text_wallper_color="#FFF6E6"
                        moving_text_color="#324235"
                        moving_text_margin="0 0 2em 0"
                        moving_text_text="JUST TAKE ME HOME"
                        moving_text_font_weight="900">
                        <Link to="/" className="nav_item_link" onClick={handleMenuToggle}>HOME</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        moving_text_wallper_color="#FFF6E6"
                        moving_text_color="#324235"
                        moving_text_margin="0 0 2em 0"
                        moving_text_text="KNOW ME"
                        moving_text_font_weight="900">
                        <Link to="/about" className="nav_item_link" onClick={handleMenuToggle}>ABOUT</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        moving_text_wallper_color="#FFF6E6"
                        moving_text_color="#324235"
                        moving_text_margin="0 0 2em 0"
                        moving_text_text="KEEP LEARNING"
                        moving_text_font_weight="900">
                        <Link to="/skill" className="nav_item_link" onClick={handleMenuToggle}>SKILLS</Link>
                    </MovingTextContainer>
                    <MovingTextContainer
                        moving_text_wallper_color="#FFF6E6"
                        moving_text_color="#324235"
                        moving_text_margin="0 0 2em 0"
                        moving_text_text="SEE MY WORK"
                        moving_text_font_weight="900">
                        <Link to="/projects" className="nav_item_link" onClick={handleMenuToggle}>PROJECTS</Link>
                    </MovingTextContainer>
                </NavItemContainer>

            </ReactStaggerNavbar>
        </>
    )
}

export default NavBar
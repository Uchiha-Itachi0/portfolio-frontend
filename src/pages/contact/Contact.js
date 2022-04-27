import React from "react";
import ContactStyle from "./ContactStyle";
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MovingTextContainer from "../../components/ReactMovingTextContainer/MovingTextContainer"
import styled from "styled-components";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const ModifiedMovingTextContainer = styled(MovingTextContainer)`

@media only screen and (max-width: 336px){
    padding-left: 200%;
}
`;
const Contact = (props) => {

    // When link is clicked go to the top of the page
    const linkClickHandler = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }

    return (
        <ContactStyle>
            <div className="contact">
                <SectionHeading isSecondary={false}>REACH OUT</SectionHeading>
                <a href="mailto:anubhav008shukla@gmail.com" className="contact_mail">anubhav008shukla@gmail.com</a>
                <div className="contact_social_icon">
                    <a href="https://github.com/Uchiha-Itachi0"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/anubhav008shukla/"><LinkedInIcon /></a>
                    <a href="https://www.instagram.com/anubhav008shukla/"><InstagramIcon /></a>
                    <a href="https://twitter.com/Anubhav08Shukla"><TwitterIcon /></a>
                </div>
                <div className="contact_menu_link">
                    <Link onClick={linkClickHandler} to="/">Home</Link>
                    <Link onClick={linkClickHandler} to="/about">About</Link>
                    <Link onClick={linkClickHandler} to="/skill">Skill</Link>
                    <Link onClick={linkClickHandler} to="/projects">Project</Link>
                </div>
            </div>
            <div className="contact_moivng_text_footer">
                <ModifiedMovingTextContainer
                    movingTextText="X Design and Built by Anubhav Shukla X"
                    minFontSize="1vw"
                    maxFontSize="16px"
                    movingTextColor="#324235"
                    movingTextFontWeight="900"
                />
            </div>
        </ContactStyle>
    )
}

export default Contact
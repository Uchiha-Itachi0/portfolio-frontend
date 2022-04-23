import styled from "styled-components";
import { motion } from "framer-motion"
export const NavContainer = styled.nav`
position: relative;
width: 100vw;
height: max-content;
background: ${props => props.backgroundColor};
padding: ${props => props.padding};
display: flex;
justify-content: space-between;
overflow-x: hidden;
z-index: 3;
`;

export const LogoContainer = styled.div`
width: ${props => `max(${props.minLogoWidth}, ${props.maxLogoWidth})`};
height:  ${props => `max(${props.minLogoWidth}, ${props.maxLogoWidth})`};
background: ${props => `url(${props.logoBackgroundImg}) center center no-repeat`};
background-size: ${props => props.logoBackgroundSize};

`;

export const LogoHeading = styled.h1`
font-size: ${props => `max(${props.minLogoFontSize}, ${props.maxLogoFontSize})`};
color: ${props => props.logoColor};
`;

export const NavMenuItem = styled.div`
position: absolute;
z-index: 2;
/* overflow-y: scroll; */
overflow-x: hidden;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* height: 100vh; */
`;

export const Container = styled.div`
width: 100vw;
height: inherit;
text-align: center;
`;

export const Link = styled.a`
font-size: max(5vw, 50px);
text-decoration: none;
color: black;
`

export const StaggerDiv = styled(motion.div)`
position: fixed;
inset: 0;
z-index: 1;
display: flex;

`;

export const StaggerDivChildren = styled(motion.div)`
width: 20%;
height: 100vh;
background: ${props => props.staggerColor};
`;
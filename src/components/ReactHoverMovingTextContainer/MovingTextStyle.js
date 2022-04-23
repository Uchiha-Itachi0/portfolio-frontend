import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
width:inherit;
height:inherit;
position:relative;
cursor: pointer;
background: ${props => props.containerBackgroundColor};
margin: ${props => props.margin}
`;

export const Link = styled.a`
font-size: ${props => `max(${props.minFontSize}, ${props.maxFontSize})`};
display: block;
width:inherit;
text-decoration: none;
color: ${props => props.linkColor}

`;

export const Wallpaper = styled(motion.div)`
position: absolute;
inset: 0;
background: ${props => props.wallpaper_color};

`;
export const ParaContainer = styled(motion.p)`
margin: 0 auto;
white-space: nowrap;
font-size: ${props => `max(${props.min_font_size}, ${props.max_font_size})`};
overflow: hidden;
pointer-events: none;
z-index: 1;
color: ${props => props.moving_text_color};
/* background-color:red; */
inset: 0;
height: 0;
position: absolute;
pointer-events: none;
font-weight: ${props => props.moving_text_font_weight};
`;

export const MovingText1 = styled(motion.span)`
display: inline-block;
padding-left: 100%;
`;
import styled from "styled-components";
import { motion } from "framer-motion";

export const ParaContainer = styled(motion.p)`
margin: 0 auto;
white-space: nowrap;
font-size: ${props => `max(${props.minFontSize}, ${props.maxFontSize})`};
overflow: hidden;
pointer-events: none;
z-index: 1;
color: ${props => props.movingTextColor};
inset: 0;
height: max-content;
position: absolute;
pointer-events: none;
margin: auto;
font-weight: ${props => props.movingTextFontWeight};
`;

export const MovingText1 = styled(motion.span)`
display: inline-block;
padding-left: 100%;
`;
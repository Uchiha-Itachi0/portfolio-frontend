import styled from "styled-components";
import { motion } from "framer-motion";

export const MenuContainer = styled.div`
width: ${props => `max(${props.minContainerSize}, ${props.maxContainerSize})`};
height: ${props => `max(${props.minContainerSize}, ${props.maxContainerSize})`};
background: ${props => props.containerColor};
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;
cursor: pointer
`;

export const MenuBar = styled(motion.div)`
width: inherit;
height: ${props => props.menuBarHeight};
background-color:${props => props.menuBarColor};
display: block;
position: relative;
`;
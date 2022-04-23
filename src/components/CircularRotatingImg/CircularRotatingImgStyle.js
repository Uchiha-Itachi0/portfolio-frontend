import styled from "styled-components";
import { motion } from "framer-motion";

const CircularRotatingImgStyle = styled(motion.div)`
width: ${props => `max(${props.minSize}, ${props.maxSize})`};
height: ${props => `max(${props.minSize}, ${props.maxSize})`};
animation: rotateImg ${props => props.rotationSpeed} infinite linear;

@keyframes rotateImg{
    100%{
        transform: rotate(360deg);
    }
}

`;

export default CircularRotatingImgStyle;
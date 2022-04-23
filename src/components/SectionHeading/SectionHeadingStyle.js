import styled from "styled-components";

const Heading = styled.h1`
font-size: max(6vw, 2rem);
margin-bottom: .5em;
color: var(${props => props.isSecondary ? '--secondary': '--primary'});


@media only screen and (max-width: 700px){
    font-size: 8vw;
}
`;

export default Heading;
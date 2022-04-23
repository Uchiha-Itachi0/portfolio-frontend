import styled from "styled-components";

const ButtonStyle = styled.button`
padding: .5em 2.5em;
font-size: max(1.5vw, 12px);
background: transparent;
border: 1px solid var(--secondary);
cursor: pointer;

&:hover{
    background: var(--secondary);
    color: var(--primary);
}

`;

export default ButtonStyle;
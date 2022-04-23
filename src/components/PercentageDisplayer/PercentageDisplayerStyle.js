import styled from "styled-components";


const DisplayPercentWithTitle = styled.p`
font-size: max(3.5vw, 20px);
cursor: pointer;
color: var(--primary);
transition: 500ms;
position: relative;
overflow: hidden;
margin-bottom: 50px;
    &::before{
        content: "${props => props.percentage}%";
        position: absolute;
        inset: 0;
        background: var(--secondary);
        color: var(--primary);
        padding-left: 1em;
        transition: 500ms;
        width: ${props => `${props.percentage}%`};
        left: -100vw;

    }
    &::after{
        content: "${props => `${props.index_number}. ${props.title}`}";
        position: absolute;
        inset: 0;
        color: var(--secondary);
        background: var(--primary);
        transition: 500ms;
        width: 100%;
        height: max-content;
        }
    
        &:hover{
            &::before{
                left: 0%;
            }
            &::after{
                left: 100vw;
            }
        }


@media only screen and (max-width: 700px){
    margin-bottom: 30px;
    font-size: 5vw;
}
`;

export default DisplayPercentWithTitle;
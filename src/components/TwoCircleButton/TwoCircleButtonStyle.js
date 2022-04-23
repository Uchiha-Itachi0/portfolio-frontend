import styled from "styled-components"

const TwoCircleButtonStyle = styled.div`
height: max-content;
width: max-content;
margin: 0 auto;
text-align: center;
position: relative;
display: flex;
align-items: center;
justify-content: center;
/* overflow-y: hidden; */
    a{
        color: #324235;
        font-size: max(2vw, 30px);
    }
    .circle_button{
        position: absolute;
        border: 2px solid #324235;
        border-radius: 50%;
        width: max(15vw, 300px);
        height: max(8vw, 150px);
        z-index:-1;
        transition: 500ms;
    }

    .circle_1 {
        transform: skewX(-10deg);
        }
    .circle_2 {
        transform: skewX(10deg);
    }

    &:hover {
            .circle_1 {
                transform: skewX(-45deg);
            }
            .circle_2 {
                transform: skewX(45deg);
            }
        }

`;
export default TwoCircleButtonStyle;
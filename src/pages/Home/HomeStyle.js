import styled from "styled-components";

const HomeStyle = styled.div`
display: flex;
justify-content: center;
/* align-items: center; */
height: 100vh;
position: relative;
overflow: hidden;

    .home_img_container{
        width: max(15vw, 200px);
        height: max(25vw, 300px);
        background: ${props => `url(${props.backgroundImg}) center center no-repeat`};
        background-size: cover;
        position: absolute;
        left: 20%;
        top: 5%;
        border-radius: 30px;
    }

    .home_small_heading_container{
        height: max-content;
        position: absolute;
        top: 25%;
        right: 20%;
        color: #324235;
        pointer-events: none;
        h1{
            font-size: max(1vw, 20px);
            span{
                font-size: max(2vw, 30px)
            }
        }
    }
    .home_big_name_container{
        text-align: center;
        position: absolute;
        top: 30%;
        pointer-events:none;
        h1{
            font-size: max(15vw);
            line-height: 15vw;
            color: #324235;
        }
    }


@media screen and (max-height: 400px) {

    height: 800px;

}

@media screen and (max-width: 980px) {

    .home_small_heading_container{
        right: 10%;
    }
}
@media screen and (max-width: 854px) {

    .home_img_container{
        left: auto;
        top: 40%;
        width: 40vw;
        height: 70vw;
    }

    .home_small_heading_container{
        top: 15%;
    }

    .home_big_name_container{
        top: 20%;
    }
}

@media screen and (max-width: 488px) {

    .home_small_heading_container{
        h1{
            font-size: 3.5vw;
            span{
                font-size: 5.5vw;
            }
        }
    }
}

`;

export default HomeStyle;
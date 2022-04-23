import styled from "styled-components"

const ProjectCardContainer = styled.div`
height: max(40vw, 600px);
width: max(30vw, 400px);
padding: 4em;
border: 2px solid var(--secondary);
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
position: relative;
color: var(--secondary);


    .project_number{
        position: absolute;
        font-size: max(10vw, 100px);
        opacity: .2;
        top: 2%;
        right: 10%
    }

    .project_card_heading{
        font-size: max(3vw, 30px);
    }

    .project_card_desc{
        text-align: center;
        font-size: max(1.5vw, 20px);
    }

    .controller{
        display: flex;
        flex-direction: column;
        gap: 2em;
        text-align: center;
        margin-top: 2em;
    }


@media only screen and (max-width: 900px){
    margin: 0 auto;
}

@media only screen and (max-width: 627px){
    /* width: 90vw; */
    padding: 1.5em;
    height: 450px;
    .project_card_heading{
        font-size: 5vw;
    }
    .project_card_desc{
        font-size: 3.5vw;
    }
}

@media only screen and (max-width: 435px){
    width: 90vw;
}

`;

export default ProjectCardContainer;
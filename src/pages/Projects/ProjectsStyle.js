import styled from "styled-components";

const ProjectStyle = styled.section`
padding: var(--section-heading-padding);

    .project_tags{
        margin: 5em 0;
        display: flex;
        gap: 2em;
        flex-wrap: wrap;

    }

    .project_project_container{
        display: flex;
        flex-wrap: wrap;
        gap: 2em;
    }
@media only screen and (max-width: 900px){
    text-align: center;
    margin: 0 auto;
    padding: (--section-heading-small-padding);
    .project_tags{
        justify-content: center;
    }
}


`;

export default ProjectStyle;
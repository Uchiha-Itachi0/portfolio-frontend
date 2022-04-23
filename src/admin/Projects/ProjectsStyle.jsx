import styled from "styled-components";

const ProjectStyle = styled.section`
padding: var(--section-heading-padding);

    .admin_project_container{
        margin-bottom: 2em;
        display: flex;
        flex-direction: column;
        gap: 2em;

        .admin_project_desc{
            height: 300px;
            background: transparent;
            resize: none;
            font-size: max(2vw, 20px);
            padding: 2em 1em;
            color: var(--secondary);
            font-weight: 600;
            border: 2px solid var(--secondary);
            
        }
    }

    .project_tags{
        margin: 5em 0;
        display: flex;
        gap: 2em;
        flex-wrap: wrap;

    }

    .admin_all_tags{
        margin: 2em 0; 
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

@media only screen and (max-width: 500px){
    .admin_project_container{
        .admin_project_desc{
            font-size: 5vw;
        }
    }
}
`;

export default ProjectStyle;
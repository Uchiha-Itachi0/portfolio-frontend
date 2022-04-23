import styled from "styled-components";

const SkillBoxStyle = styled.div`
margin-top: 2em;
display: flex;
justify-content: space-between;
align-items: center;
padding: 2em;
border: 2px solid var(--secondary);

    .admin_skill{
        width: 100%;
    }

@media only screen and (max-width: 550px){
    flex-direction: column;
    gap: 2em;
}

`;

export default SkillBoxStyle;
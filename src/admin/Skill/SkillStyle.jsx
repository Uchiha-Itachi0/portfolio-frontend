import styled from "styled-components";

const SkillStyle = styled.section`
padding: var(--section-heading-padding);
color: var(--secondary);

.admin_skill_update{
    
    .admin_skill_update_input{
        margin-bottom: 2em;
        text-transform: uppercase;
    }
}

.skill_subheading{
    margin-bottom: 2em;
    font-size: max(2vw, 16px)
}

@media only screen and (max-width: 550px){
    text-align: center;
}

`;

export default SkillStyle;
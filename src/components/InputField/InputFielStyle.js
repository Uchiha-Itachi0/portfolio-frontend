import styled from "styled-components";

const SearchInputCotainer = styled.div`
/* text-align: center; */
height: max-content;
    .search_input{
        font-size: max(1.5vw, 20px);
        padding: 1em;
        border: 2px solid var(--secondary);
        background: transparent;
        color: var(--secondary);
        font-weight: 700;
        outline: none;
        width: 50%;
    }

@media only screen and (max-width: 900px){
    
        .search_input{
            width: 100%;
        }
}
`;


export default SearchInputCotainer;
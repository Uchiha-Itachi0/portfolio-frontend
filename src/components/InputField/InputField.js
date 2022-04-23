import React from 'react';
import SearchInputCotainer from "./InputFielStyle";

const finalData = [];

const SearchInput = (props) => {


    return (
        <SearchInputCotainer
            className={props.className}>
            <input type={props.input_type} autoComplete={false} placeholder={props.placeholder} className="search_input" value={props.value}
                onChange={(e) => props.inputchange(e.target.value)}
            />
        </SearchInputCotainer>
    )
}

export { finalData };
export default SearchInput
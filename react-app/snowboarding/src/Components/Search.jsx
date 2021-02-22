import React from 'react';
function Search() {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    return (
        <input className="search" type="text" placeHolder="add something"/>
            
        )
    }

export default Search;
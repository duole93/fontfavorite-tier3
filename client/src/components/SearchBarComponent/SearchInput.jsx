import React from 'react';

function SearchBar(props) {

    function handleChange(event) {
        props.onChangeText(event.target.value);
    }

    function clearText() {
        props.onChangeText("");
    }
    return (
        <div className="search-ctn-sub search-ctn-sub-grow-1">
            <i className="fas fa-search search-icon"></i>
            <div className="search-input-ctn">
                <input
                    className="search-input"
                    type="text"
                    name="search-text"
                    id="search-text"
                    placeholder="Search"
                    value={props.searchText}
                    onChange={handleChange}
                />
            </div>
            <button className="search-btn search-btn-circle" onClick={clearText}><i className="fas fa-times"></i></button>
        </div>
    );
}
export default SearchBar;
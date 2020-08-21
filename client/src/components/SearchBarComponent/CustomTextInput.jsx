import React from 'react'

function CustomTextInput(props) {

    function handleChangeText(event) {
        props.onChangeText(event.target.value);
    }
    
    return (
        <div className="search-ctn-sub search-ctn-sub-grow-2">
            <div className="search-btn-ctn">
                <button className="search-btn dropdown-btn">Custom <i className="fas fa-caret-down"></i></button>
            </div>
            <div className="search-input-ctn">
                <input
                    className="search-input"
                    type="text" name="test-text"
                    id="test-text"
                    placeholder="Type something" 
                    onChange={handleChangeText}
                    value={props.value}
                    />
            </div>
        </div>
    )
}

export default CustomTextInput;

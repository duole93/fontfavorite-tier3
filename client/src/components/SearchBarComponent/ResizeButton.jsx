import React, { useState } from 'react'

function ResizeButton(props) {
    const [open, setOpen] = useState(false);

    function toggleDropdown() {
        setOpen(!open);
    }
    function handleChangeFontSize(event) {
        props.onChangeSize(event.target.value);
        toggleDropdown();
    }
    return (
        <div className="search-ctn-sub dropdown search-ctn-sub-no-flex">
            <button className="search-btn dropdown-btn resize-btn" onClick={toggleDropdown}>{props.fontSize} px <i className="fas fa-caret-down"></i></button>
            {open && (
                <div className="dropdown-menu resize-menu">
                    <button className="search-btn dropdown-item" value="10" onClick={handleChangeFontSize}>10</button>
                    <button className="search-btn dropdown-item" value="16" onClick={handleChangeFontSize}>16</button>
                    <button className="search-btn dropdown-item" value="24" onClick={handleChangeFontSize}>24</button>
                    <button className="search-btn dropdown-item" value="40" onClick={handleChangeFontSize}>40</button>
                </div>)}

        </div>
    )
}

export default ResizeButton;

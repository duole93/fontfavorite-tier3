import React from 'react'

function ResetButton(props) {
    return (
        <div className="search-ctn-sub search-ctn-sub-no-flex">
            <button className=" search-btn search-btn-circle" onClick={props.onReset}><i className="fas fa-redo"></i></button>
        </div>
    )
}
export default ResetButton;

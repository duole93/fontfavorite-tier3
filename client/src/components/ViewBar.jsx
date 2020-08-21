import React from 'react';


function ViewBar(props) {


    return (
        <div className="container view-ctn">
            {/* <div>
                <p className="view-result"><strong>999</strong> of 999 families</p>
            </div> */}
            <div className="view-options-ctn">
                <button
                    className={!props.isList ? "view-btn view-switcher view-active" : "view-btn view-switcher"}
                    onClick={() => props.onChangeView(false)}
                >
                    <i className="fas fa-th-large"></i> Grid
                    </button>
                <button
                    className={props.isList ? "view-btn view-switcher view-active" : "view-btn view-switcher"}
                    onClick={() => props.onChangeView(true)}
                >
                    <i className="fas fa-th-list"></i> List
                    </button>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}
export default ViewBar;
import React, { useState } from 'react';

function FontCard(props) {
    let defaultText = "Almost before we knew it, we had left the ground.";

    //load font to document
    let url = 'url(' + props.fontFamily + ')'
    var font = new FontFace(props.fontTitle, url);
    font.load()
        .then(function (loadedFont) {
            //add font to document
            document.fonts.add(loadedFont);
        })
        .catch(function (error) {
            console.error(error);
        });
    
    //Dynamic font style based on font-family and size
    let fontStyle = {
        fontSize: props.fontSize + "px",
        fontFamily: props.fontTitle
    }
    return (
        <a className="font-card" href="none" ref={props.useRef}>
            <h3 className="font-title">{props.fontTitle}</h3>
            <p className="font-test" style={fontStyle}>{props.customText === "" ? defaultText : props.customText}</p>
        </a>
    );

}
export default FontCard;

